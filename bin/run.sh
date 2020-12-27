#!/bin/bash
# Copyright (C) 2020 Nikita Morozov morozov.space@mail.ru - All Rights Reserved
declare -a menu=("Firebase Login" "Development" "Generate" "Quit")
cur=1
start() {
  case ${menu[cur]} in
    "Firebase Login" )
      echo "Starting: ${menu[cur]}"
      bash bin/helpers/firebase-auth.sh
      ;;    
    "Development" )
      echo "Starting: ${menu[cur]}"
      docker-compose -f ./docker/docker-compose.yml up --build
      exit
      ;;
    "Generate" )
      echo "Starting: ${menu[cur]}"
      docker-compose -f ./docker/docker-compose.yml -f ./docker/docker-compose.generate.yml up --build && docker-compose -f ./docker/docker-compose.yml down
      exit
      ;;
    "Quit" )
      exit 0;;
    *) 
      printf " Invalid option $mode\n Use --help to see more information"
      ;;
  esac
}
# Check for arguments
while [ -n "$1" ]
do
case $1 in
  -h|--help)
    echo "Options:"
    echo "-h, --help      Help"
    echo "-l, --list      List of modes"
    echo "-m, --mode      Set default mode by id. Default: [${cur}] ${menu[cur]}"
    exit 0
    ;;
  -l|--list)
    # List all modes
    echo "[id] [Mode]"
    for i in "${!menu[@]}"; do 
      echo "[$i] ${menu[$i]}"
    done
    exit 0
    ;;
  -m|--mode)
    cur=$2
    start
    exit 0
    ;;
  *)
    $PWD/bin/run.sh --help
    exit 0
    ;;
esac
shift
done
printf "Press Q to exit \n\n"
draw_menu() {
  for i in "${menu[@]}"; do
    if [[ ${menu[$cur]} == $i ]]; then
      tput setaf 2; echo "> $i"; tput sgr0
    else
      echo "   $i";
    fi
  done
}

clear_menu()  {
  for i in "${menu[@]}"; do tput cuu1; done
  tput ed
}

# Draw initial Menu
draw_menu
while read -s -n 1 key; do # 1 char (not delimiter), silent
  # Check for enter/space
  if [[ "$key" == "" ]]; then break; fi

  # catch multi-char special key sequences
  read -sN1 -t 0.0001 k1; read -sN1 -t 0.0001 k2; read -sN1 -t 0.0001 k3
  key+=${k1}${k2}${k3}
    
  case "$key" in
    # cursor up, left: previous item
    i|j|$'\e[A'|$'\e0A'|$'\e[D'|$'\e0D') ((cur > 0)) && ((cur--));;
    # cursor down, right: next item
    k|l|$'\e[B'|$'\e0B'|$'\e[C'|$'\e0C') ((cur < ${#menu[@]}-1)) && ((cur++));;
    # home: first item
    $'\e[1~'|$'\e0H'|$'\e[H') cur=0;;
    # end: last item
    $'\e[4~'|$'\e0F'|$'\e[F') ((cur=${#menu[@]}-1));;
    # q, carriage return: quit
    q|''|$'\e') echo "Aborted." && exit;;
  esac
  # Redraw menu
  clear_menu
  draw_menu
done
start
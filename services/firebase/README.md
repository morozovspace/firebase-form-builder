Инструкция по запуску:
:
1.1 Создайте инициализационный контейнер из файла ./docker/init/Dockerfile

1.2 Следуйте инструкциями и сохраните полученный токен в переменную окружения FIREBASE_TOKEN

3) Создайте контейнер из файла ./docker/dev/Dockerfile
    Необходимые параметры:
Порты, необходимые для работы образа:
    - 4000:4000 # Emulator Suite UI
    - 4400:4400 # Other reserved port
    - 4500:4500 # Other reserved port
    - 5000:5000 # Firebase Hosting
    - 5001:5001 # Cloud Functions
    - 8080:8080 # Cloud Firestore
    - 8085:8085 # Cloud Pub/Sub
    - 9099:9099 # Authentication

Команда, запускаемая в dev контейнере :

firebase emulators:start --import=./seed --export-on-exit

Для переопределения команды по умолчанию, используй entrypoint

Использовать Swagger для внедрения API в Postman
https://stackoverflow.com/questions/39072216/how-to-import-swagger-apis-into-postman
<script>
import { validationMixin } from "vuelidate" // https://vuelidate.js.org
import * as VuelidateValidators from "vuelidate/lib/validators" // https://vuelidate.js.org/#sub-builtin-validators
import Input from "./elements/Input"
import Select from "./elements/Select"
import Textarea from "./elements/Textarea"
export default {
  components: {
    Input,
    Select,
    Textarea,
  },
  mixins: [validationMixin],
  props: {
    config: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  data: () => ({
    validators: {
      ...VuelidateValidators, // validators from vuelidate
    },
    formValues: {},
    errors: false,
  }),
  computed: {
    disabled() {
      return this.$v.formValues.$error
    },
  },
  created() {
    this.setValues(this.config, this.formValues, null)
  },
  methods: {
    setValues(schema, target, defaultValue) {
      schema.map((f) => {
        this.$set(target, f.id, defaultValue)
      })
    },
    updateField(field, value) {
      this.formValues[field] = value
      if (this.$v.formValues[field]) {
        this.$v.formValues[field].$touch()
      }
    },
    prepareData(values) {
      return new Promise((resolve, reject) => {
        try {
          const formData = new FormData()
          for (const field of Object.keys(values)) {
            formData.append(field, JSON.stringify(values[field]))
          }
          return resolve(formData)
        } catch (e) {
          return reject(e)
        }
      })
    },
    async submit() {
      try {
        const data = await this.prepareData(this.formValues)
        this.$v.$touch()
        if (!this.$v.formValues.$invalid) {
          this.$emit("submit", data)
        }
      } catch (e) {
        // handle errors
      }
    },
  },
  validations() {
    try {
      const formValues = {}
      this.config.map((field) => {
        if (field.validation && field.validation.length) {
          formValues[field.id] = {}
          for (const validation of field.validation) {
            formValues[field.id][
              validation.name ? validation.name : validation
            ] = validation.args
              ? this.validators[validation.name](validation.args)
              : this.validators[validation]
          }
        } else {
          // if no validation rules defined
        }
      })
      return {
        formValues,
      }
    } catch (e) {
      // handle error
    }
  },
}
</script>
<template>
  <form @submit.prevent="submit">
    <div
      v-for="(field, i) in config"
      :key="field.id"
      :class="['form-group', i < config.length - 1 ? 'mb-30' : '']"
    >
      <component
        :is="field.type"
        :field="field"
        @input="updateField(field.id, $event)"
      />
      <span
        v-if="$v.formValues[field.id] && $v.formValues[field.id].$error"
        class="form-group__error"
      >
        <!--
          Your custom error messages
          <span v-if="!$v.formValues[field.id].required">Field is required.</span>
        -->
        Field is invalid.
      </span>
    </div>
    <div class="form-submit__wrapper">
      <button class="form-submit__submit" type="submit" :disabled="disabled">
        Submit
      </button>
    </div>
  </form>
</template>
<style lang="scss">
@import "@/assets/styles/components/Form.scss";
</style>

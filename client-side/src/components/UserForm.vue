<template>
  <form>
    <v-text-field
      v-model="firstName"
      :error-messages="firstNameErrors"
      label="First name"
      required
      @input="$v.firstName.$touch()"
      @blur="$v.firstName.$touch()"
    ></v-text-field>

    <v-text-field
      v-model="lastName"
      :error-messages="lastNameErrors"
      label="Last name"
      required
      @input="$v.lastName.$touch()"
      @blur="$v.lastName.$touch()"
    ></v-text-field>

    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="Email"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>

    <v-text-field
      v-model="birthDate"
      :error-messages="birthDateErrors"
      label="Birth date"
      required
      @input="$v.birthDate.$touch()"
      @blur="$v.birthDate.$touch()"
    ></v-text-field>

    <address-form ref="addressForm" />

    <v-btn class="mr-4" @click="submit">Save</v-btn>
    <v-btn @click="clear">Clear</v-btn>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';
import AddressForm from './AddressForm.vue';
import User from '../models/User';
import UserService from '../services/UserService';
import ErrorValidatorHandler from '../utils/ErrorValidatorHandler';

export default {
  mixins: [validationMixin],

  validations: {
    lastName: { required },
    firstName: { required },
    email: { required, email },
    birthDate: { required },
  },

  components: {
    AddressForm,
  },

  data: () => ({
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
  }),

  computed: {
    firstNameErrors() {
      const errorHandler = new ErrorValidatorHandler();
      return errorHandler.checkRequiredField(this.$v.firstName, 'First name');
    },
    lastNameErrors() {
      const errorHandler = new ErrorValidatorHandler();
      return errorHandler.checkRequiredField(this.$v.lastName, 'Last name');
    },
    emailErrors() {
      const errorHandler = new ErrorValidatorHandler();
      errorHandler.checkRequiredField(this.$v.email, 'Email');
      errorHandler.checkValidEmail(this.$v.email);
      return errorHandler.multipleValidations();
    },
    birthDateErrors() {
      const errorHandler = new ErrorValidatorHandler();
      return errorHandler.checkRequiredField(this.$v.birthDate, 'Birth date');
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      const address = this.$refs.addressForm.submit();
      const user = new User(this.firstName, this.lastName, this.email, this.birthDate, address);
      user.id = 77;
      UserService.create(user).then(() => this.$emit('modal-user-success'));
    },
    clear() {
      this.$v.$reset();
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.birthDate = '';
      this.$refs.addressForm.clear();
    },
  },
};
</script>

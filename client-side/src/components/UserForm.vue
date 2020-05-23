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
    <v-btn class="mr-4" @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';
/* eslint-disable no-unused-expressions */
import AddressForm from './AddressForm.vue';
import User from '../models/User';
import UserService from '../services/UserService';

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
      const errors = [];
      if (!this.$v.firstName.$dirty) return errors;
      !this.$v.firstName.required && errors.push('First name is required.');
      return errors;
    },
    lastNameErrors() {
      const errors = [];
      if (!this.$v.lastName.$dirty) return errors;
      !this.$v.lastName.required && errors.push('Last name is required.');
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push('Must be valid email');
      !this.$v.email.required && errors.push('Email is required');
      return errors;
    },
    birthDateErrors() {
      const errors = [];
      if (!this.$v.birthDate.$dirty) return errors;
      !this.$v.birthDate.required && errors.push('Birth Date is required');
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      this.$refs.addressForm.submit();
      const address = this.$refs.addressForm.createAddress();
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

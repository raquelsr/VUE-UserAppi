<template>
  <form>
    <v-text-field
      v-model="street"
      :error-messages="streetErrors"
      label="Street"
      required
      @input="$v.street.$touch()"
      @blur="$v.street.$touch()"
    ></v-text-field>
    <v-text-field
    v-model="city"
    :error-messages="cityErrors"
    label="City"
    required
    @input="$v.city.$touch()"
    @blur="$v.city.$touch()"
  ></v-text-field>
    <v-text-field
    v-model="country"
    :error-messages="countryErrors"
    label="Country"
    required
    @input="$v.country.$touch()"
    @blur="$v.country.$touch()"
  ></v-text-field>
    <v-text-field
    v-model="postalCode"
    :error-messages="postalCodeErrors"
    label="Postal Code"
    required
    @input="$v.postalCode.$touch()"
    @blur="$v.postalCode.$touch()"
  ></v-text-field>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import Address from '../models/Address';
/* eslint-disable no-unused-expressions */

export default {
  mixins: [validationMixin],

  validations: {
    street: { required },
    city: { required },
    country: { required },
    postalCode: { required },
  },

  data: () => ({
    street: '',
    city: '',
    country: '',
    postalCode: '',
  }),

  computed: {
    streetErrors() {
      const errors = [];
      if (!this.$v.street.$dirty) return errors;
      !this.$v.street.required && errors.push('Street is required.');
      return errors;
    },
    cityErrors() {
      const errors = [];
      if (!this.$v.city.$dirty) return errors;
      !this.$v.city.required && errors.push('City is required.');
      return errors;
    },
    countryErrors() {
      const errors = [];
      if (!this.$v.country.$dirty) return errors;
      !this.$v.country.required && errors.push('Country is required.');
      return errors;
    },
    postalCodeErrors() {
      const errors = [];
      if (!this.$v.postalCode.$dirty) return errors;
      !this.$v.postalCode.required && errors.push('Postal Code is required.');
      return errors;
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
    },
    createAddress() {
      const address = new Address(this.street, this.city, this.country, this.postalCode);
      address.id = 1;
      console.log(address);
      return address;
    },
    clear() {
      this.$v.$reset();
      this.street = '';
      this.city = '';
      this.country = '';
      this.postalCode = '';
    },
  },
};
</script>

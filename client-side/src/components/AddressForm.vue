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
import ErrorValidatorHandler from '../utils/ErrorValidatorHandler';

export default {

  props: {
    user: Object,
  },

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

  mounted() {
    if (this.user) {
      this.street = this.user.address.street;
      this.city = this.user.address.city;
      this.country = this.user.address.country;
      this.postalCode = this.user.address.postalCode;
    }
  },

  computed: {
    streetErrors() {
      const errorHandler = new ErrorValidatorHandler();
      return errorHandler.checkRequiredField(this.$v.street, 'Street');
    },
    cityErrors() {
      const errorHandler = new ErrorValidatorHandler();
      return errorHandler.checkRequiredField(this.$v.city, 'City');
    },
    countryErrors() {
      const errorHandler = new ErrorValidatorHandler();
      return errorHandler.checkRequiredField(this.$v.country, 'Country');
    },
    postalCodeErrors() {
      const errorHandler = new ErrorValidatorHandler();
      return errorHandler.checkRequiredField(this.$v.postalCode, 'Postal Code');
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      const address = new Address(this.street, this.city, this.country, this.postalCode);
      address.id = 1;
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

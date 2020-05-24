<template src="./address-form.template.html"></template>

<script>
import { validationMixin } from 'vuelidate';
import {
  required, maxLength, minLength, numeric,
} from 'vuelidate/lib/validators';
import ErrorValidatorHandler from '../../../utils/error-validator-handler';
import Address from '../../../models/address';

export default {
  props: {
    user: Object,
  },

  mixins: [validationMixin],

  validations: {
    street: { required },
    city: { required },
    country: { required, maxLength: maxLength(2), minLength: minLength(2) },
    postalCode: { required, numeric },
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
      errorHandler.checkRequiredField(this.$v.country, 'Country');
      errorHandler.checkMaxLength(this.$v.country);
      errorHandler.checkMinLength(this.$v.country);
      return errorHandler.multipleValidations();
    },
    postalCodeErrors() {
      const errorHandler = new ErrorValidatorHandler();
      errorHandler.checkRequiredField(this.$v.postalCode, 'Postal Code');
      errorHandler.checkIsNumber(this.$v.postalCode);
      return errorHandler.multipleValidations();
    },
  },

  methods: {
    createAddress() {
      const address = new Address()
        .setStreet(this.street)
        .setCity(this.city)
        .setCountry(this.country)
        .setPostalCode(this.postalCode);
      return address;
    },
    submit() {
      this.$v.$touch();
      const address = this.createAddress();
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

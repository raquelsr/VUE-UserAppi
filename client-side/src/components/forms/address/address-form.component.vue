<template src="./address-form.template.html"></template>

<script>
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import ErrorValidatorHandler from '../../../utils/ErrorValidatorHandler';
import AddressBuilder from '../../../models/builders/AddressBuilder';

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
    createAddress() {
      const address = new AddressBuilder()
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
  },
};
</script>

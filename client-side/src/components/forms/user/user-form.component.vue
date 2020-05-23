<template src="./user-form.template.html"></template>
<style scoped lang="scss" src="./user-form.style.scss"></style>

<script>
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';
import AddressForm from '../address/address-form.component.vue';
import User from '../../../models/User';
import UserService from '../../../services/UserService';
import ErrorValidatorHandler from '../../../utils/ErrorValidatorHandler';

export default {
  props: {
    user: Object,
  },

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

  mounted() {
    if (this.user) {
      this.firstName = this.user.firstName;
      this.lastName = this.user.lastName;
      this.email = this.user.email;
      this.birthDate = this.user.birthDate;
    }
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
    save() {
      this.$v.$touch();
      const address = this.$refs.addressForm.submit();
      const user = new User(this.firstName, this.lastName, this.email, this.birthDate, address);
      if (this.user) {
        user.id = this.user.id;
        UserService.edit(user).then(() => this.$emit('modal-user-success'));
      } else {
        UserService.create(user).then(() => this.$emit('modal-user-success'));
      }
    },
    cancel() {
      this.$emit('close-modal');
    },
  },
};
</script>

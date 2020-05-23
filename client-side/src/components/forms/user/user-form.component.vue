<template src="./user-form.template.html"></template>
<style scoped lang="scss" src="./user-form.style.scss"></style>

<script>
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';
import AddressForm from '../address/address-form.component.vue';
import UserBuilder from '../../../models/builders/UserBuilder';
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

  data: (vm) => ({
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menuDatePicker: false,
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

  watch: {
    birthDate() {
      this.dateFormatted = this.formatDate(this.birthDate);
    },
  },

  methods: {
    createUser() {
      const address = this.$refs.addressForm.submit();
      const user = new UserBuilder()
        .setFirstName(this.firstName)
        .setLastName(this.lastName)
        .setEmail(this.email)
        .setBirthDate(this.birthDate)
        .setAddress(address);
      return user;
    },

    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split('-');
      return `${month}/${day}/${year}`;
    },

    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split('/');
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    },

    save() {
      this.$v.$touch();
      const user = this.createUser();
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

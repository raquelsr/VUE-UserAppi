<template src="./user-form.template.html"></template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';
import AddressForm from '../address/address-form.component.vue';
import User from '../../../models/user';
import UserService from '../../../services/user.service';
import ErrorValidatorHandler from '../../../utils/error-validator-handler';

export default {
  name: 'UserForm',

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

  data: (vm) => ({
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menuDatePicker: false,
  }),

  mounted() {
    if (this.user) {
      this.firstName = this.user.firstName;
      this.lastName = this.user.lastName;
      this.email = this.user.email;
      this.birthDate = this.user.birthDate;
    }
  },

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
      const address = this.$refs.addressForm.save();
      const user = new User()
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
        UserService.edit(user).then(() => {
          this.$emit('modal-user-success');
        });
      } else {
        UserService.create(user).then(() => {
          this.clear();
          this.$emit('modal-user-success');
        });
      }
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

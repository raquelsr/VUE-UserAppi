<template src="./modal-form.template.html"></template>
<style scoped lang="scss" src="./modal-form.style.scss"></style>

<script>
import UserForm from '../forms/user/user-form.component.vue';

export default {
  name: 'ModalForm',

  props: {
    user: Object,
  },

  components: {
    UserForm,
  },

  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
      if (!this.user) this.$refs.userForm.clear();
    },
    save() {
      this.$refs.userForm.save();
    },
    updateUserList() {
      this.close();
      this.$emit('update-users');
    },
  },
};
</script>

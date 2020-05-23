<template src="./modal.template.html"></template>
<style scoped lang="scss" src="./modal.style.scss"></style>

<script>
import UserForm from '../forms/user/user-form.component.vue';

export default {
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
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
    updateUserList() {
      this.closeModal();
      this.$emit('update-users');
    },
  },
};
</script>

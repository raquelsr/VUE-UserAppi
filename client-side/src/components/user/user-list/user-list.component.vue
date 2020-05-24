<template src="./user-list.template.html"></template>
<style scoped lang="scss" src="./user-list.style.scss"></style>

<script>
import UserService from '../../../services/user.service';
import ModalForm from '../../modal/modal-form.component.vue';
import UserDetail from '../user-detail/user-detail.component.vue';

export default {
  name: 'UserList',

  components: {
    ModalForm,
    UserDetail,
  },

  data: () => ({
    users: [],
    error: false,
  }),

  created() {
    this.showUsers();
  },

  methods: {
    showUsers() {
      UserService.getAll()
        .then((response) => {
          this.error = false;
          this.users = response.data;
        })
        .catch((error) => {
          this.error = true;
          console.log(error);
        });
    },
    deleteUser(id) {
      UserService.delete(id)
        .then(() => {
          this.error = false;
          this.showUsers();
        })
        .catch((error) => {
          this.error = true;
          console.log(error);
        });
    },
  },
};
</script>

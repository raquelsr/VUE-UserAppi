<template src="./user-list.template.html"></template>
<style scoped lang="scss" src="./user-list.style.scss"></style>

<script>
import UserService from '../../../services/UserService';
import Modal from '../../modal/modal.component.vue';
import UserDetail from '../user-detail/user-detail.component.vue';

export default {
  name: 'UserList',

  components: {
    Modal,
    UserDetail,
  },

  data: () => ({
    users: [],
  }),

  created() {
    this.showUsers();
  },

  methods: {
    showUsers() {
      UserService.getAll()
        .then((response) => { this.users = response.data; })
        .catch((error) => console.log(error));
    },

    deleteUser(id) {
      UserService.delete(id)
        .then(() => this.showUsers())
        .catch((error) => console.log(error));
    },
  },
};
</script>

<template>
  <div>
    <h1>USER LIST</h1>
    <button id="show-modal" @click="showModal = true">Show Modal</button>
  <!-- use the modal component, pass in the prop -->
  <Modal />
    <p>{{msg}}</p>

    <ul>
      <li v-for="user of users" :key="user.id"> {{user.firstname}}
      <v-btn
        @click="showUserDetail(user)"
      >
        Ver
      </v-btn>
       <v-btn
        @click="deleteUser(user.id)"
      >
        Delete
      </v-btn>
      </li>
    </ul>
  </div>
</template>

<script>
import UserService from '../services/UserService';
import router from '../router/index';
import Modal from './modal/Modal.vue';

export default {
  name: 'UserList',
  props: ['msg'],
  components: {
    Modal,
  },
  data: () => ({
    users: [],
    showModal: false,
  }),
  created() {
    this.showUsers();
  },
  watch: {
    users() {
      console.log('users update');
    },
  },
  methods: {
    showUsers() {
      UserService.getAll()
        .then((response) => { this.users = response.data; })
        .catch((error) => console.log(error));
    },
    showUserDetail(user) {
      router.push({ name: 'UserDetail', params: { userId: user.id }, query: { user } });
    },
    deleteUser(id) {
      UserService.delete(id)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    },
  },
};
</script>

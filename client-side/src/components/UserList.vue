<template>
  <div>
    <h1>USER LIST</h1>
    <p>{{msg}}</p>

    <ul>
      <li v-for="user of users" :key="user.id"> {{user.firstname}}
      <v-btn
        @click="showUserDetail(user)"
      >
        Ver
      </v-btn>
      </li>
    </ul>
  </div>
</template>

<script>
import UserService from '../services/UserService';
import router from '../router/index';

export default {
  name: 'UserList',
  props: ['msg'],
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
    showUserDetail(user) {
      router.push({ name: 'UserDetail', params: { userId: user.id }, query: { user } });
    },
  },
};
</script>

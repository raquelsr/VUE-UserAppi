<template>
  <div>
    <h1>USER LIST</h1>
    <p>{{msg}}</p>

    <ul>
      <li v-for="user of users" :key="user.id"> {{user.firstname}}
      <v-btn
        @click="getUserById(user.id)"
      >
        Ver
      </v-btn>
      </li>
    </ul>
  </div>
</template>

<script>
import UserService from '../services/UserService';

export default {
  name: 'UserList',
  props: ['msg'],
  data: () => ({
    users: [],
  }),
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      UserService.getAll()
        .then((response) => { this.users = response.data; })
        .catch((error) => console.log(error));
    },
    getUserById(id) {
      UserService.getById(id)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
    },
  },
};
</script>

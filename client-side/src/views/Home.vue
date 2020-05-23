<template>
  <div class="home">
    <UserList />
  </div>
</template>

<script>
import UserList from '../components/user/user-list/user-list.component.vue';

export default {
  name: 'Home',
  components: {
    UserList,
  },
};
</script>

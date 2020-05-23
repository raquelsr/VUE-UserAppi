<template>
  <div>
    <h1>USER DETAILS</h1>
    <div v-if="user">
      <p>{{user.firstname}}</p>
      <p>{{user.lastname}}</p>
      <p>{{user.email}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UserDetail',
  created() {
    this.userId = this.$route.params.userId;
    this.user = this.$route.query.user;
    console.log(this.userId);
    console.log(this.user);
  },
  data: () => ({
    user: null,
  }),
};
</script>

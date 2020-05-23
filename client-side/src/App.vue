<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <NavBar />
    </v-app-bar>

     <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from './components/navbar/nav-bar.component.vue';

export default {
  name: 'App',

  components: {
    NavBar,
  },
};
</script>

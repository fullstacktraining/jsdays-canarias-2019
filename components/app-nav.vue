<template>
  <b-navbar sticky toggleable="md" type="dark" variant="dark">
    <b-navbar-brand to="/">Star Wars <font-awesome-icon :icon="['fab', 'empire']" :style="{ color: 'white' }" /></b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item to="/" active-class="active" exact>Home</b-nav-item>
        <b-nav-item to="/characters" active-class="active" v-bind:active="this.$route.matched.some(record => record.path.includes('/characters'))" exact>Characters</b-nav-item>
        <b-nav-item v-if="user" active-class="active" to="/my-favourites">My favourites</b-nav-item>
        <b-nav-item active-class="active" to="/all-favourites" exact>All favourites</b-nav-item>
        <b-nav-item v-if="!user" active-class="active" to="/register" exact>Register</b-nav-item>
      </b-navbar-nav>
      <!-- Login Form --> 
      <login />
    </b-collapse>
  </b-navbar>
</template>
<script>
import login from '@/components/login';
export default {
  components: {
    login
  },
  computed: {
    user() {
      return this.$store.getters.activeUser;
    }
  }
}
</script>

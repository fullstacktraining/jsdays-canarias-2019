<template>
  <b-navbar-nav class="ml-auto">
    <b-nav-form v-if="!user">
      <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="E-mail" v-model="emailInput" />
      <b-form-input size="sm" class="mr-sm-2" type="password" placeholder="Password" v-model="passwordInput" />
      <b-button @click="login" size="sm" class="my-2 my-sm-0" variant="success" type="button">Login</b-button>
      <b-toast id="my-toast" variant="danger" solid>
        <template v-slot:toast-title>
          <div class="d-flex flex-grow-1 align-items-baseline">
            <strong class="mr-auto">Error!</strong>
          </div>
        </template>
        {{ error }}
      </b-toast>
    </b-nav-form>
      <b-nav-form v-if="user">
      <b-button size="sm" class="my-2 my-sm-0" variant="danger" type="button" @click="signOut">Logout</b-button>
    </b-nav-form>
  </b-navbar-nav>
</template>
<script>
export default {
  data: () => ({ emailInput: '', passwordInput: '', error: '' }),
  methods: {
    login() {
      this.$store.dispatch('signInWithEmail', {
        email: this.emailInput,
        password: this.passwordInput
      }).then(data => {
        this.emailInput = ''
        this.passwordInput = ''
        this.$router.replace({ path: 'my-favourites' });
      }).catch(e => {
        this.$bvToast.show('my-toast');
        this.error = e.message;
        console.error(e.message);
      });
    },
    signOut() {
      this.$store.dispatch('signOut').then(() => {
        this.$router.replace({ path: '/' });
      });
    }
  },
  computed: {
    user() {
      return this.$store.getters.activeUser;
    }
  }
}
</script>
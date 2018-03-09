<template>
  <div class="fluid-container">
    <div id="dashboard">
      <h1>That's the dashboard!</h1>
      <p>You should only get here if you're authenticated!</p>
      <p v-if="email">Your email address: {{ email }}</p>
    </div>
    <hr>
    <div style="margin-top: 2rem; padding-bottom: 1rem;"><h1>Make Bootstrap Sexy Again</h1></div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    computed: {
      email () {
        return !this.$store.getters.user ? false : this.$store.getters.user.email
      }
    },
    created () {
      this.$store.dispatch('fetchUser')
    }
  }
</script>

<style lang="scss" scoped>

  @import '../../styles/custom-bootstrap.scss';
  @import '../../../node_modules/bootstrap/scss/bootstrap.scss';

  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>
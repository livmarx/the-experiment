<template>
  <button @click="logOut">Log Out</button>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'LogOutButton',
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: 'signin' });
        });
    },
  },
};
</script>

<style>
</style>

<template>
  <div>
    <form @submit.prevent>
      <TextInput
        label="Email"
        type="email"
        :inputData="email"
        @updateData="updateData($event, 'email')"
      />
      <TextInput
        label="Password"
        type="password"
        :inputData="password"
        @updateData="updateData($event, 'password')"
      />
      <button @click="signIn">Sign In!</button>
    </form>
    </form>
  </div>
</template>

<script>
// functions:
import { signInResearcher } from '@/apis/authApi.js';
// components:
import TextInput from '@/components/TextInput';
export default {
  name: 'SignIn',
  components: {
    TextInput,
  },
  data() {
    return {
        email: null,
        password: null,
        feedback: null,
    };
  },
  methods: {
    signIn() {
      if (this.email && this.password) {
        this.feedback = null;
        signInResearcher(this.email, this.password)
          .then(() => {
            this.$router.push({ name: 'home' });
          })
          .catch(err => {
            console.error(err);
            this.feedback = err.message;
          });
      } else {
        this.feedback = 'Please enter both email and password.';
      }
    },
    updateData(event, attribute) {
      this[attribute] = event;
    },
  },
};
</script>

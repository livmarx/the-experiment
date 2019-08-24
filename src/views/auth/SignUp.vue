<template>
  <div>
    <form @submit.prevent>
      <TextInput
        label="Name"
        type="text"
        :inputData="name"
        @updateData="updateData($event, 'name')"
      />
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
      <button @click="signUp">Sign Up!</button>
    </form>
  </div>
</template>

<script>
// functions:
import { createResearcher } from '@/apis/authApi.js';
// components:
import TextInput from '@/components/TextInput';

export default {
  name: 'SignUp',
  components: {
    TextInput,
  },
  data() {
    return {
      name: null,
      email: null,
      password: null,
    };
  },
  methods: {
    signUp() {
      if (this.name && this.email && this.password) {
        let reseacher = {};
        reseacher.email = this.email;
        reseacher.name = this.name;
        createResearcher(this.email, this.password, reseacher)
          .then(() => {
            this.$router.push({ name: 'home' });
          })
          .catch(err => {
            console.error(err);
            this.feedback = err.message;
          });
      } else {
        this.feedback = 'Please fill all fields.';
      }
    },
    updateData(event, attribute) {
      this[attribute] = event;
    },
  },
};
</script>

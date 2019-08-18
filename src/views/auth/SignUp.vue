<template>
  <div>
    Sign Up
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
    </form>
  </div>
</template>

<script>
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
    updateData(event, attribute) {
      this[attribute] = event
    },
  },
};
</script>

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
      <CreateButton title="Sign Up!" routeName="home" :data="user" />
    </form>
  </div>
</template>

<script>
import CreateButton from '@/components/CreateButton';
import TextInput from '@/components/TextInput';

export default {
  name: 'SignUp',
  components: {
    CreateButton,
    TextInput,
  },
  data() {
    return {
      user: {
        name: null,
        email: null,
        password: null,
      },
    };
  },
  methods: {
    updateData(event, attribute) {
      this[attribute] = event;
    },
  },
};
</script>

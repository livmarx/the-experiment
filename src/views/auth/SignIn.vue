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
      <CreateButton title="Sign In!" routeName="home" :data="user" />
    </form>
  </div>
</template>

<script>
// components:
import CreateButton from '@/components/CreateButton';
import TextInput from '@/components/TextInput';
export default {
  name: 'SignIn',
  components: {
    CreateButton,
    TextInput,
  },
  data() {
    return {
      researcher: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    updateData(event, attribute) {
      this.researcher[attribute] = event;
    },
  },
};
</script>

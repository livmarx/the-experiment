<template>
  <div>
    <button @click="redirectTo">{{buttonName}}</button>
  </div>
</template>

<script>
export default {
  name: 'NavLink',
  props: ['buttonName', 'route'],
  methods: {
    redirectTo() {
      this.$router.push({ name: this.route });
    },
  },
};
</script>

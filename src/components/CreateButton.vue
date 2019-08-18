<template>
  <div>
    <button @click="createItem">{{title}}</button>
  </div>
</template>

<script>
export default {
  name: 'CreateButtons',
  props: ['title', 'routeName', 'data'],
  data() {
    return {};
  },
  methods: {
    createItem() {
      console.log('Create an item! this.data:', this.data);
      this.$router.push({ name: this.routeName });
    },
  },
  created() {
    console.log('this.data:', this.data);
  },
};
</script>

<style>
</style>


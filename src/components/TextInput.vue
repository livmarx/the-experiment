2<template>
  <div>
    <label>{{label}}</label>:
    <br />
    <input :type="type" v-model="inputData" @keyup="updateData" />
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: ['label', 'inputData', 'type'],
  data() {
    return {};
  },
  methods: {
    updateData() {
      this.$emit('emitData', this.inputData);
    },
  },
};
</script>

<style>
</style>

<template>
  <div>
    <label>{{label}}</label>
    <select v-model="selected">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
      <option :value="4">4</option>
      <option :value="5">5</option>
      <option :value="6">6</option>
      <option :value="7">7</option>
      <option :value="8">8</option>
      <option :value="9">9</option>
      <option :value="10">10</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectRatingInput',
  props: ['label', 'inputData'],
  data() {
    return {
      selected: null,
    };
  },
  watch: {
    inputData() {
      this.selected = this.inputData;
    },
    selected() {
      this.emitData();
    },
  },
  methods: {
    emitData() {
      this.$emit('emitData', this.selected);
    },
  },
};
</script>

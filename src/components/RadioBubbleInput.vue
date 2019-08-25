<template>
  <div>
    <label>{{label}}</label>
    Yes:
    <input type="radio" v-model="checked" :value="true" />
    No:
    <input type="radio" v-model="checked" :value="false" />
  </div>
</template>

<script>
export default {
  name: 'RadioBubbleInput',
  props: ['label', 'inputData'],
  data() {
    return {
      checked: null,
    };
  },
  watch: {
    inputData() {
      this.checked = this.inputData;
    },
    checked() {
      this.emitData();
    },
  },
  methods: {
    emitData() {
      this.$emit('emitData', this.checked);
    },
  },
};
</script>

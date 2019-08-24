<template>
  <div>
    <h1>LABORATORIES</h1>
    <div v-for="lab in laboratories" :key="lab.id">
      <h3>{{lab.name}}</h3>
      <p>{{lab.address.addressOne}}</p>
    </div>
  </div>
</template>

<script>
import { readCollection } from '@/apis/databaseApi';
export default {
  name: 'Laboratories',
  data() {
    return {
      laboratories: null,
    };
  },
  methods: {
    getLaboratories() {
      readCollection('laboratories')
        .then(snapshot => {
          this.laboratories = snapshot;
        })
        .catch(err => {
          console.error(err);
        });
    },
  },
  created() {
    this.getLaboratories();
  },
};
</script>

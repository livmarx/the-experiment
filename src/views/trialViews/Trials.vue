<template>
  <div>
    <h1>Trials</h1>
    <div v-for="trial in trials" :key="trial.id">
      <h3>{{trial.name}}</h3>
      <p>Rating: {{trial.rating}}</p>
      <p>Date: {{trial.date}}</p>
    </div>
  </div>
</template>

<script>
import { readCollection } from '@/apis/databaseApi';
export default {
  name: 'Trials',
  data() {
    return {
      trials: null,
    };
  },
  methods: {
    getSubjects() {
      readCollection('trials')
        .then(snapshot => {
          this.trials = snapshot;
        })
        .catch(err => {
          console.error(err);
        });
    },
  },
  created() {
    this.getSubjects();
  },
};
</script>

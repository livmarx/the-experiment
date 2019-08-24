<template>
  <div>
    <h1>Trials</h1>
    <div v-for="trial in trials" :key="trial.id">
      <h3>Trial number {{trial.trialNumber}} with subject number {{trial.subjectId}}</h3>
      <p>Rating: {{trial.rating}}</p>
      <p>Date: {{trial.date}}</p>
    </div>
  </div>
</template>

<script>
import { readCollection, readDocument } from '@/apis/databaseApi';
export default {
  name: 'Trials',
  data() {
    return {
      trials: null,
    };
  },
  methods: {

    getTrials() {
      readCollection('trials')
        .then(snapshot => {
          this.trials = snapshot;
          this.trials.forEach(element => {
            element.subject = {};
            return element;
          });
        })
        .catch(err => {
          console.error(err);
        });
    },
  },
  created() {
    this.getTrials();
  },
};
</script>

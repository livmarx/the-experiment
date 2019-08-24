<template>
  <div>
    <h1>SUBJECTS</h1>
    <div v-for="subject in subjects" :key="subject.id">
      <h3>{{subject.name}}</h3>
      <p>Rating: {{subject.rating}}</p>
      <p>Intro'd By: {{subject.introductionType}}</p>
      <p>Last Trial: {{subject.lastTrialDate}}</p>
    </div>
  </div>
</template>

<script>
import { readCollection } from '@/apis/databaseApi';
export default {
  name: 'Subjects',
  data() {
    return {
      subjects: null,
    };
  },
  methods: {
    getSubjects() {
      readCollection('subjects')
        .then(snapshot => {
          this.subjects = snapshot;
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

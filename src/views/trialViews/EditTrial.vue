
<template>
  <div>
    <h2>Edit Trial</h2>
    <form @submit.prevent>
      <TextInput label="Date" :inputData="trial.date" @emitData="updateLocalData($event, 'date')" />
      <TextInput
        label="Start Time"
        :inputData="trial.startTime"
        @emitData="updateLocalData($event, 'startTime')"
      />
      <TextInput
        label="End Time"
        :inputData="trial.endTime"
        @emitData="updateLocalData($event, 'endTime')"
      />
      <TextInput
        label="Subject ID"
        :inputData="trial.subjectId"
        @emitData="updateLocalData($event, 'subjectId')"
      />
      <TextInput
        label="Trial Number"
        :inputData="trial.trialNumber"
        @emitData="updateLocalData($event, 'trialNumber')"
      />

      <SelectRatingInput
        label="Rank how attracted you were to this subject at the end of the trial"
        :inputData="trial.subjectAllureRating"
        @emitData="updateLocalData($event, 'subjectAllureRating')"
      />
      <SelectRatingInput
        label="Rank how you think the trial went over all"
        :inputData="trial.rating"
        @emitData="updateLocalData($event, 'rating')"
      />
      <RadioBubbleInput
        label="Drinks?"
        :inputData="trial.didDrink"
        @emitData="updateLocalData($event, 'didDrink')"
      />
      <RadioBubbleInput
        label="Smoke?"
        :inputData="trial.didSmoke"
        @emitData="updateLocalData($event, 'didSmoke')"
      />
      <RadioBubbleInput
        label="didSleepOver?"
        :inputData="trial.didSleepOver"
        @emitData="updateLocalData($event, 'didSleepOver')"
      />
      <RadioBubbleInput
        label="wouldContinueExperiment?"
        :inputData="trial.wouldContinueExperiment"
        @emitData="updateLocalData($event, 'wouldContinueExperiment')"
      />
      <RadioBubbleInput
        label="didKiss?"
        :inputData="trial.didKiss"
        @emitData="updateLocalData($event, 'didKiss')"
      />
      <button @click="updateTrial">Save Trail Data</button>
    </form>
  </div>
</template>

<script>
import { readDocument, updateDocument } from '@/apis/databaseApi.js';
import RadioBubbleInput from '@/components/RadioBubbleInput.vue';
import SelectRatingInput from '@/components/SelectRatingInput.vue';

import TextInput from '@/components/TextInput.vue';

export default {
  name: 'EditTrial',
  components: { RadioBubbleInput, SelectRatingInput, TextInput },
  data() {
    return {
      id: null,
      trial: {
        date: null,
        didDrink: null,
        didSleepOver: null,
        didSmoke: null,
        endTime: null,
        id: null,
        labNotes: null,
        rating: null,
        startTime: null,
        subjectAllureRating: null,
        subjectId: null,
        trialNumber: null,
        wouldContinueExperiment: null,
      },
    };
  },
  methods: {
    updateTrial() {
      updateDocument('trials', this.id, this.trial)
        .then(() => {
          this.$router.push({ name: 'trials' });
        })
        .catch(err => {
          console.log(err);
        });
    },
    updateLocalData(event, attr) {
      this.trial[attr] = event;
    },
    getTrial() {
      readDocument('trials', this.id)
        .then(doc => {
          this.trial = doc;
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  created() {
    this.id = this.$route.params.trial_id;
    this.getTrial();
  },
};
</script>

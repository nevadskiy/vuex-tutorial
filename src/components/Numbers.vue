<template>
  <div class="sum">
    <ul v-if="numbers.length">
      <li v-for="(number, index) in numbers" :key="index">{{ number }}</li>
    </ul>
    <span v-else>Start adding numbers</span>

    <add-number></add-number>
  </div>
</template>

<script>
import AddNumber from './AddNumber.vue';

export default {
  name: 'numbers',

  components: {
      'add-number': AddNumber,
  },

  computed: {
    numbers() {
      return this.$store.getters.numbers;
    }
  },
};
</script>

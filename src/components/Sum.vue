<template>
  <div class="sum">
    {{ sum }}
    <p>You have generated {{ totalNumbers }} random numbers</p>
  </div>
</template>

<script>
export default {
  name: 'sum',

  computed: {
    sum() {
      return this.$store.getters.sum;
    },

    totalNumbers() {
      return this.$store.getters.totalNumbers;
    },
  },
};
</script>

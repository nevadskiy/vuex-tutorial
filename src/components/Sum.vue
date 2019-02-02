<template>
  <div class="sum">
    {{ sum }}
  </div>
</template>

<script>
export default {
  name: 'sum',

  computed: {
    sum() {
      return this.$store.getters.sum;
    },
  },
};
</script>

<template>
    <div class="sum">
        <a @click.prevent="add" role="button" href="">Add random number</a>
    </div>
</template>

<script>
  export default {
    name: 'add-number',

    methods: {
      add() {
        this.$store.commit('addNumber', {
          min: 1,
          max: 100,
        });
      },
    }
  };
</script>

<template>
  <div id="app">
    <numbers></numbers>
    <sum></sum>
  </div>
</template>

<script>
import Sum from './components/Sum.vue';
import Numbers from './components/Numbers.vue';

export default {
  name: 'app',
  components: {
    'sum': Sum,
    'numbers': Numbers,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

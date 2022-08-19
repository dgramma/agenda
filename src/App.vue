<script setup lang="ts">
import Calendar from './components/Calendar.vue';
</script>

<template>
  <header><h1>Ajennda</h1></header>
  <main>
    <Calendar />
  </main>
</template>

<style lang="scss" scoped>
h1 {
  margin-top: 0;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

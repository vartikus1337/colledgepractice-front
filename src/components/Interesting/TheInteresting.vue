<script setup lang="ts">
import Section from "./TheSection.vue";
</script>

<template>
  <div class="interesting">
    <Section :is-carts="true" />
    <Section :is-news="true" />
  </div>
</template>

<style scoped>
.interesting {
  display: flex;
  justify-content: space-around;
  padding: 35px 10px 30px;
  gap: 20px;
  isolation: isolate;
  background: linear-gradient(180deg, #3f57ae 0%, #6b8cff 100%);
}
</style>

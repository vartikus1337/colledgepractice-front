<script setup lang="ts">
import { ref } from "vue";
import Title from "./TheTitle.vue";
import { SECTIONS, typeSections } from "./sections";

const selected = ref<typeSections>(SECTIONS.ALL);
</script>

<template>
  <div class="shop">
    <Title
      :selected-section="selected"
      @select-section="(s) => (selected = s)"
    />
  </div>
</template>

<style scoped>
.shop {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 10px;
  background-color: #6b8cff;
}
</style>

<script setup lang="ts">
import { ref } from "vue";

import { SECTIONS, typeSections } from "./sections";

import Title from "./TheTitle.vue";
import Assortment from "./TheAssortment.vue";

const selected = ref<typeSections>(SECTIONS.ALL);
</script>

<template>
  <div class="shop">
    <Title
      :selected-section="selected"
      @select-section="(s) => (selected = s)"
    />
    <div class="shop__body"><Assortment /></div>
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

.shop__body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  padding: 10px;
  gap: 50px 10px;
}
</style>

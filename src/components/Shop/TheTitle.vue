<script setup lang="ts">
import { SECTIONS, typeSections } from "./sections.ts";

const { selectedSection } = defineProps<{
  selectedSection: typeSections;
}>();

defineEmits<{
  selectSection: [section: typeSections];
}>();

const sectionValues = Object.values(SECTIONS);
</script>

<template>
  <div class="shop__title">
    <h1>магазин игр</h1>
    <section class="shop__sections">
      <button
        v-for="section in sectionValues"
        :key="section"
        :class="['shop-btn', { active: section === selectedSection }]"
        @click="$emit('selectSection', section)"
      >
        {{ section }}
      </button>
    </section>
  </div>
</template>

<style scoped>
.shop__title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  padding-bottom: 20px;
}

.shop__title > h1 {
  color: #293d86;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 56px;
}

.shop__sections {
  display: flex;
  gap: 20px;
}

.shop-btn {
  padding: 5px 10px;
}

.shop-btn:hover:not(.active) {
  opacity: 0.6;
}

.shop-btn.active {
  color: #fff;
  background-color: #293d86;
  border-radius: 30px;
}
</style>

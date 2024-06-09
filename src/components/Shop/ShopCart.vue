<script setup lang="ts">
import { PropShopCart } from "./TheAssortment.vue";

import SectionPlatform from "./SectionPlatform.vue";

defineProps<PropShopCart>();
</script>

<template>
  <div class="game">
    {{ nameGame }}
    <img :src="imgSrc" alt="Фото игры" />
    <div class="platforms">
      <SectionPlatform v-for="platform in platforms" :platform="platform" />
    </div>
  </div>
</template>

<style scoped></style>

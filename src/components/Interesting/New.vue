<!-- TODO -->
<script setup lang="ts">
import type { NewProps } from "./TheSection.vue";
defineProps<NewProps>();
</script>

<template>
  <div class="new">
    <div class="new__title">
      <h2>{{ title }}</h2>
      <h4>{{ author }}</h4>
    </div>
    <img class="new__img" :src="imgSrc" alt="фотография Новости" />
  </div>
</template>

<style scoped>
.new {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0px 10px 0px 0px;
  gap: 10px;
}

.new__title {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  gap: 10px;
  width: 100%;
}

.new__title > h2 {
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  align-items: center;
  color: #000000;
}

.new__title > h4 {
  height: 14px;
  width: 100%;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  color: rgba(18, 34, 93, 0.6);
}

.new__img {
  height: 110px;
  width: 260px;
  border-radius: 20px;
}
</style>

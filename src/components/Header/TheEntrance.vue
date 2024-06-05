<script setup lang="ts">
interface Props {
  isGuest: boolean;
  id?: string;
}

defineProps<Props>();
</script>

<template>
  <div v-if="isGuest" class="color guest">
    <button class="login__text">login</button>
  </div>
  <div v-else class="color account">
    <button></button>
    <button></button>
  </div>
</template>

<style scoped>
.color {
  color: #1e3072;
}

.login__text {
  color: #1e3072;
  font-size: 20px;
}

button {
  color: inherit;
}
</style>

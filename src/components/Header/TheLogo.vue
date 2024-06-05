<script setup lang="ts"></script>

<template>
  <button @click="console.log(123)" class="logo">
    <img src="/svg/GamerMarket.svg" alt="Logo" />
    <h1 class="logo__text">GamerMarket</h1>
  </button>
</template>

<style scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.logo__text {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #1e3072;
}
</style>

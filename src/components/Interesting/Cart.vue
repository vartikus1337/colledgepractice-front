<script setup lang="ts">
import type { CartProps } from "./TheSection.vue";

defineProps<CartProps>();
</script>

<template>
  <div class="interesting__cart">
    <img class="cart__img" :src="imgSrc" alt="Фотография игры" />
    <div class="cart__title">
      <h3>{{ nameGame }}</h3>
      <h4>-{{ discount }}%</h4>
    </div>
    <div class="cart__price">
      <h2>{{ price }} &#x20BD</h2>
    </div>
    <button class="btn-buy">Buy</button>
  </div>
</template>

<style scoped>
.interesting__cart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 20px;
  padding: 30px 20px;
  background: #3f57ae;
  border-radius: 25px;
}

.cart__img {
  height: 200px;
  border-radius: 20px;
}

.cart__title {
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  gap: 10px;
  height: 20px;
}

.cart__title > h3 {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #6b8cff;
}

.cart__title > h4 {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #e85a10;
}

.cart__price {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.cart__price > h2 {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  color: #6b8cff;
}

.btn-buy {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  gap: 10px;
  background: #9bf00b;
  border-radius: 50px;
}
</style>

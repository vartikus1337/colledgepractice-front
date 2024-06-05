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
  padding: 20px;
  gap: 20px;
  width: 298px;
  height: 406px;
  background: #3f57ae;
  border-radius: 25px;
}

.cart__img {
  width: 258px;
  height: 200px;
  border-radius: 20px;
}

.cart__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  gap: 10px;
  width: 100%;
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
  justify-content: center;
  align-items: flex-end;
  width: 258px;
  height: 23px;
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

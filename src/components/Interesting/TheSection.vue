<script setup lang="ts">
import Cart from "./Cart.vue";
import { computed, ref } from "vue";

const props = defineProps<Props>();

interface Props {
  isCarts?: boolean;
  isNews?: boolean;
}

export interface CartProps {
  nameGame: string;
  discount: number;
  price: number;
  imgSrc: string;
}

// TODO: dataNews

const dataCarts = ref<Array<CartProps>>([
  {
    nameGame: "Battlefield 2042",
    discount: 20,
    price: 4999,
    imgSrc: srcPngHelper("BF2042"),
  },
  {
    nameGame: "Battlefield 2042",
    discount: 20,
    price: 4999,
    imgSrc: srcPngHelper("BF2042"),
  },
]);

function srcPngHelper(nameFile: string): string {
  return `/png/${nameFile}.png`;
}

const classSection = computed(() => {
  if (props.isCarts) return "interesting__carts";
  if (props.isNews) return "interesting__news";
});
</script>

<template>
  <div :class="classSection">
    <h1 :class="classSection + '-title'">
      {{ isCarts ? "Скидки на игры" : "Новости в ГеймДеве" }}
    </h1>
    <div :class="classSection + '-body'">
      <Cart
        v-if="isCarts"
        v-for="{ nameGame, discount, price, imgSrc } in dataCarts"
        :key="imgSrc"
        :name-game="nameGame"
        :discount="discount"
        :price="price"
        :img-src="imgSrc"
      />
      <!-- TODO New -->
    </div>
  </div>
</template>

<style scoped>
.interesting__carts {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 700px;
  height: 541px;
}

.interesting__carts-title {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 75px;
  color: #1e3072;
}

.interesting__carts-body {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 20px;
}
</style>

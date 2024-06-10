<script setup lang="ts">
import { computed, ref } from "vue";
import { srcPngHelper } from "../common/utils";

import Cart from "./Cart.vue";
import New from "./New.vue";
import BecomeAuthor from "./TheBecomeAuthor.vue";

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

export interface NewProps {
  title: string;
  author: string;
  imgSrc: string;
}

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

const dataNews = ref<Array<NewProps>>([
  {
    title:
      "Показали новые игры от Sony на 2 года вперёд - PlayStation state of play 2024",
    author: "admin",
    imgSrc: srcPngHelper("PSplay2024"),
  },
  {
    title: "Страница Dragon Age: Dreadwolf появилась в магазине Xbox",
    author: "admin",
    imgSrc: srcPngHelper("DADreadWolf"),
  },
  {
    title: "Little Nightmares III отложили до 2025 года",
    author: "admin",
    imgSrc: srcPngHelper("LitNight3desc"),
  },
]);

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
      <New
        v-if="isNews"
        v-for="{ title, author, imgSrc } in dataNews"
        :key="imgSrc"
        :title="title"
        :author="author"
        :img-src="imgSrc"
      />
      <BecomeAuthor v-if="isNews" />
    </div>
  </div>
</template>

<style scoped>
.interesting__news,
.interesting__carts {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.interesting__news-title,
.interesting__carts-title {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 75px;
  color: #1e3072;
}

.interesting__news-body,
.interesting__carts-body {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.interesting__news-body {
  flex-direction: column;
}

.interesting__carts-body {
  justify-content: start;
  gap: 30px;
}
</style>

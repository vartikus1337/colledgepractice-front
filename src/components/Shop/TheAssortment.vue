<script setup lang="ts">
import { srcPngHelper } from "../utils";
import { SECTIONS, typeSections } from "./sections";

import ShopCart from "./ShopCart.vue";

export interface PropShopCart {
  nameGame: string;
  platforms: Array<typeSections>;
  imgSrc: string;
  id?: number;
}

const dataCarts: Array<PropShopCart> = [
  {
    nameGame: "Old World",
    platforms: [SECTIONS.PC],
    imgSrc: srcPngHelper("OldWorld"),
    id: 0,
  },
  {
    nameGame: "Hearths of iron IV",
    platforms: [SECTIONS.PC],
    imgSrc: srcPngHelper("HOI4cadet"),
    id: 1,
  },
  {
    nameGame: "Resident Evil 4",
    platforms: [SECTIONS.XBOX, SECTIONS.PC, SECTIONS.PLAYSTATION],
    imgSrc: srcPngHelper("resEvil4gold"),
    id: 2,
  },
  {
    nameGame: "GTFO",
    platforms: [SECTIONS.XBOX, SECTIONS.PC],
    imgSrc: srcPngHelper("GTFO"),
    id: 3,
  },
];
</script>

<template>
  <ShopCart
    v-for="{ nameGame, platforms, imgSrc, id } in dataCarts"
    :key="id"
    :name-game="nameGame"
    :platforms="platforms"
    :img-src="imgSrc"
  />
</template>

<style scoped></style>

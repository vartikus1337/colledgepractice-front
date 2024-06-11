<script setup lang="ts">
import { ref, provide, Ref } from "vue";

import Header from "@/components/Header/TheHeader.vue";
import Interesting from "./components/Interesting/TheInteresting.vue";
import Shop from "./components/Shop/TheShop.vue";
import Footer from "./components/Footer/TheFooter.vue";

const isLogged = ref(false);

provide<Ref<boolean>>("isLogged", isLogged);
</script>

<template>
  <Header />
  <Interesting />
  <Shop />
  <Footer />
</template>

<style scoped></style>

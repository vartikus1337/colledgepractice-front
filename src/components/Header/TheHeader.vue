<script setup lang="ts">
import { ref, inject, Ref } from "vue";
import Logo from "./TheLogo.vue";
import Entrance from "./TheEntrance.vue";
import SearchInput from "./Search/TheSearchInput.vue";

let searchVal = ref("");

let isLogged = inject<Ref<boolean>>("isLogged");
</script>

<template>
  <header class="header">
    <Logo />
    <SearchInput
      :short-icon="false"
      :search-icon="false"
      :clear-icon="true"
      v-model="searchVal"
      placeholder="search..."
    />
    <Entrance :is-guest="!isLogged" />
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  gap: 10px;
  height: 50px;
  background: #3f57ae;
}

.header__search {
  width: 200px;
  background-color: #293d86;
}
</style>

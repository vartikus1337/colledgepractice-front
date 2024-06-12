<script setup lang="ts">
import { Ref, inject } from "vue";

import Login from "./TheLogin.vue";
import Registration from "./TheRegistration.vue";
import Purchases from "./ThePurchases.vue";
import Account from "./TheAccount.vue";

interface Props {
  isGuest: boolean;
  id?: string;
}

const isLogged = inject("isLogged") as Ref<boolean>;

defineProps<Props>();
</script>

<template>
  <div v-if="!isLogged" class="color guest">
    <Login />
    <Registration />
  </div>
  <div v-else class="color account">
    <Purchases />
    <Account />
  </div>
</template>

<style scoped>
.color {
  color: #1e3072;
  display: flex;
  gap: 10px;
}

button {
  color: inherit;
}
</style>

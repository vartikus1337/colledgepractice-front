<script setup lang="ts">
type btnProps = "buy" | "another";

defineProps<{
  btn: btnProps;
}>();
</script>

<template>
  <!-- TODO: Возможно использовать вместо постоянного создания кнопок, но тогда реализовать коллбек с id -->
</template>

<style scoped></style>

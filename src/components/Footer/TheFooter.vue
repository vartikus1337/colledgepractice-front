<script setup lang="ts">
import Comments from "./TheComments.vue";
import SendComment from "./TheSendComment.vue";
</script>

<template>
  <div class="footer">
    <div class="footer__info-left">
      <div class="footer__info-title">
        <h2>Магазин GamerMarket</h2>
      </div>
      <Comments />
      <SendComment />
      <button>О магазине</button>
    </div>
    <div class="footer__info-right">
      <div class="footer__info-about">
        <a href="#">© GamerMarket 2024</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  height: 100%;
  background-image: url(/png/footer_bg.png);
}

.footer__info-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px 10px;
  width: fit-content;
  gap: 10px;
  background: #f3d9b8;
}

.footer__info-title {
  display: flex;
  align-items: center;
}

.footer__info-right {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;
  gap: 10px;
}

.footer__info-about {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 5px;
  gap: 10px;
  background: #f3d9b8;
}
</style>

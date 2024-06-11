<script setup lang="ts"></script>

<template>
  <div class="footer">
    <div class="footer__info-left">
      <div class="footer__info-title">
        <h2>Магазин GamerMarket</h2>
      </div>
      <a href="#">Отзывы</a>
      <a href="#">Оставить отзыв</a>
      <a href="#">О магазине</a>
    </div>
    <div class="footer__info-right">
      <div class="footer__info-about">
        <a href="#">Конфиденциальность и файлы cookie</a>
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

.footer__info-left a {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: rgba(0, 0, 0, 0.5);
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

<script setup lang="ts">
import SharedButton from '@/components/shared/SharedButton.vue'
import logo from '@/assets/icons/brixLogo.svg'

const onSubscribeClick = () => {}
</script>

<template>
  <footer class="page-footer">
    <div class="page-footer__container">
      <div class="page-footer__info">
        <img class="page-footer__logo" :src="logo" alt="logo" />
        <p class="page-footer__text">Copyright © 2021 BRIX Templates | All Rights Reserved</p>
      </div>

      <div class="page-footer__input-wrapper">
        <input class="page-footer__input" type="email" placeholder="Enter your email" />
        <SharedButton text="Subscribe" size="small" @click="onSubscribeClick" />
      </div>
    </div>
  </footer>
</template>

<style scoped>
.page-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-block: 42px 44px;
}

@media (max-width: 900px) {
  .page-footer {
    padding-block: 25px;
  }
}

.page-footer__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 16px;
}

@media (max-width: 900px) {
  .page-footer__container {
    flex-direction: column-reverse;
    align-items: flex-end;
    gap: 30px;
  }
}

.page-footer__info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

@media (max-width: 600px) {
  .page-footer__info {
    align-items: flex-start;
  }
}

.page-footer__logo {
  height: 40px;
  object-fit: contain;
}

@media (max-width: 600px) {
  .page-footer__logo {
    height: 30px;
    width: auto;
  }
}

.page-footer__text {
  font-size: 14px;
  color: var(--neutral-600);
}

.page-footer__input-wrapper {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 507px;
  padding: 12px 16px 12px 31px;
  border: 1px solid var(--neutral-300);
  border-radius: 60px;
  box-shadow: 0 8px 25px 0 rgba(13, 10, 44, 0.06);
}

@media (max-width: 1050px) {
  .page-footer__input-wrapper {
    padding: 8px 12px 8px 20px;
    max-width: 40%;
  }
}

@media (max-width: 900px) {
  .page-footer__input-wrapper {
    padding: 5px 5px 5px 15px;
    max-width: 100%;
  }
}

.page-footer__input {
  width: 100%;
  font-size: 18px;
  line-height: 20px;
  color: var(--neutral-600);
}

@media (max-width: 900px) {
  .page-footer__input {
    font-size: 14px;
    line-height: 120%;
  }
}
</style>

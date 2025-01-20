<template>
  <footer class="page-footer">
    <div class="page-footer__container">
      <div class="page-footer__info">
        <IconBrixTemplatesLogo />
        <p class="page-footer__text">Copyright © 2021 BRIX Templates | All Rights Reserved</p>
      </div>

      <div class="page-footer__input-wrapper">
        <input class="page-footer__input" type="email" placeholder="Enter your email" />
        <SharedButton text="Subscribe" size="small" @click="onSubscribeClick" />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import SharedButton from '@/components/shared/SharedButton.vue'
import IconBrixTemplatesLogo from '@/components/icons/IconBrixTemplatesLogo.vue'

const onSubscribeClick = () => {
  console.log('Subscribe button clicked')
}
</script>

<style scoped>
.page-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-block: 42px 44px;
  border-top: 1px solid var(--neutral-400);
}

/* TODO Divider */

.page-footer__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 16px;
}

.page-footer__info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.page-footer__logo {
  height: 40px;
  object-fit: contain;
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

.page-footer__input {
  width: 100%;
  font-size: 18px;
  line-height: 20px;
  color: var(--neutral-600);
}
</style>

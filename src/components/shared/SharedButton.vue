<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

withDefaults(
  defineProps<{
    text: string
    isOutlined?: boolean
    size?: 'large' | 'small'
    type?: 'button' | 'submit'
  }>(),
  {
    isOutlined: false,
    size: 'large',
    type: 'button',
  },
)
</script>

<template>
  <button
    :type="type"
    :class="[
      'shared-button',
      isOutlined ? 'shared-button--outlined' : 'shared-button--filled',
      size === 'large' ? 'shared-button--large' : 'shared-button--small',
    ]"
  >
    {{ text }}
  </button>
</template>

<style scoped>
.shared-button {
  border: none;
  border-radius: 56px;
  padding: 20px 40px;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.shared-button--large {
  height: 61px;
  font-size: 18px;
  line-height: 20px;
}

.shared-button--small {
  height: 45px;
  font-size: 14px;
}

.shared-button--filled {
  background-color: var(--primary-color-1);
  color: var(--neutral-100);
  box-shadow: 0 3px 12px 0 rgba(74, 58, 255, 0.18);
}

.shared-button--filled:hover {
  background-color: var(--primary-color-2);
}

.shared-button--outlined {
  background-color: transparent;
  border: 2px solid var(--primary-color-1);
  color: var(--primary-color-1);
}

.shared-button--outlined:hover {
  border-color: var(--primary-color-2);
  color: var(--primary-color-2);
}

@media (max-width: 1024px) {
  .shared-button {
    padding: 16px 32px;
  }

  .shared-button--large {
    height: 55px;
    font-size: 16px;
  }

  .shared-button--small {
    height: 40px;
    font-size: 13px;
  }
}

@media (max-width: 768px) {
  .shared-button {
    padding: 12px;
  }

  .shared-button--large {
    height: 40px;
    font-size: 14px;
  }

  .shared-button--small {
    height: 35px;
    font-size: 12px;
  }
}
</style>

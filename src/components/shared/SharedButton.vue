<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

const props = withDefaults(
  defineProps<{
    text: string
    onClick: () => void
    isOutlined?: boolean
    size?: 'large' | 'small'
  }>(),
  {
    isOutlined: false,
    size: 'large',
  },
)

const handleClick = () => {
  if (props.onClick) props.onClick()
}
</script>

<template>
  <button
    :class="[
      'shared-button',
      isOutlined ? 'shared-button--outlined' : 'shared-button--filled',
      size === 'large' ? 'shared-button--large' : 'shared-button--small',
    ]"
    @click="handleClick"
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
  background-color: var(--secondary-color-1);
  color: var(--neutral-800);
}

.shared-button--outlined {
  background-color: transparent;
  border: 2px solid var(--primary-color-1);
  color: var(--primary-color-1);
}

.shared-button--outlined:hover {
  background-color: var(--primary-color-1);
  color: var(--neutral-100);
}
</style>

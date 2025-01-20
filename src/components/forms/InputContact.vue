<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineProps<{
  name: string
  label: string
  placeholder: string
  type?: string
  modelValue: string
}>()

const emit = defineEmits(['update:modelValue'])

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target) {
    emit('update:modelValue', target.value)
  }
}
</script>

<template>
  <div class="input-contact">
    <label :for="name" class="input-label">{{ label }}</label>
    <div class="input-wrapper">
      <input
        :id="name"
        :name="name"
        :placeholder="placeholder"
        :type="type"
        :value="modelValue"
        @input="onInput"
        class="input-field"
      />
      <span class="input-icon">
        <slot></slot>
      </span>
    </div>
  </div>
</template>

<style scoped>
.input-contact {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.input-label {
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: var(--neutral-800);
}

.input-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  width: 100%;
  max-width: 100%;
  padding: 20px 22px;
  border: 1px solid var(--neutral-300);
  border-radius: 46px;
  box-shadow: 0 2px 6px 0 rgba(19, 18, 66, 0.07);
}

.input-field {
  width: 100%;
  flex: 1;
  font-size: 18px;
  line-height: 111%;
  color: var(--neutral-600);
  outline: none;
  border: none;
  background-color: transparent;
}

.input-wrapper:focus-within {
  border-color: var(--primary-color-1);
}

.input-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  flex-shrink: 0;
}
</style>

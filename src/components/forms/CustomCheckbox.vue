<script setup lang="ts">
import { defineProps, defineEmits, type Component, computed } from 'vue'

const props = defineProps<{
  id: string
  value: string
  label: string
  icon: Component
  modelValue: string[]
}>()

const emits = defineEmits<{
  (event: 'update:modelValue', value: string[]): void
}>()

const modelValue = computed<string[]>({
  get: () => props.modelValue,
  set: (value: string[]) => emits('update:modelValue', value),
})

function handleChange(event: Event) {
  const target = event.target as HTMLInputElement
  const newValue = target.value
  const updatedValue = target.checked
    ? [...props.modelValue, newValue]
    : props.modelValue.filter((v) => v !== newValue)

  modelValue.value = updatedValue
}
</script>

<template>
  <div class="custom-checkbox">
    <label>
      <input
        class="checkbox-input"
        type="checkbox"
        :value="value"
        :checked="modelValue.includes(value)"
        @change="handleChange"
      />
      <div class="checkbox-content">
        <div class="icon-wrapper"><component :is="icon" /></div>
        <span class="checkbox-label">{{ label }}</span>
      </div>
    </label>
  </div>
</template>

<style scoped>
.checkbox-wrapper {
  display: inline-block;
  width: 100%;
}

.checkbox-input {
  display: none;
}

.checkbox-input:checked + .checkbox-content {
  border-color: var(--primary-color-1);
  background-color: var(--neutral-100);
}

.checkbox-content {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 120px;
  padding: 24px;
  border: 2px solid var(--neutral-300);
  border-radius: 8px;
  background-color: var(--neutral-100);
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.checkbox-content:hover {
  border-color: var(--primary-color-2);
}

.icon-wrapper {
  position: relative;
  width: 67px;
  height: 67px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(102, 51, 255, 0.15);
}

.checkbox-label {
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: var(--neutral-800);
}
</style>

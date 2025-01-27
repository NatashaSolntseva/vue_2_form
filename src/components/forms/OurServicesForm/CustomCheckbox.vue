<script setup lang="ts">
import { defineProps, defineEmits, type Component, computed } from 'vue'

const props = defineProps<{
  value: string
  label: string
  icon: string
  modelValue: string[]
}>()

const emits = defineEmits<{
  (event: 'update:modelValue', value: string[]): void
}>()

function handleChange(event: Event) {
  const target = event.target as HTMLInputElement
  const newValue = target.value
  const updatedValue = target.checked
    ? [...props.modelValue, newValue]
    : props.modelValue.filter((v) => v !== newValue)

  emits('update:modelValue', updatedValue)
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
        <div class="icon-wrapper">
          <img class="icon" :src="icon" :alt="label" />
        </div>
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

@media (max-width: 900px) {
  .checkbox-content {
    height: auto;
    min-height: 80px;
    padding: 15px;
  }
}

.checkbox-content:hover {
  border-color: var(--primary-color-2);
}

.icon-wrapper {
  width: 67px;
  height: 67px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(102, 51, 255, 0.15);
}

@media (max-width: 900px) {
  .icon-wrapper {
    width: 40px;
    height: 40px;
  }

  .icon {
    width: 25px;
    height: 25px;
  }
}

.checkbox-label {
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: var(--neutral-800);
}
</style>

<script setup lang="ts">
import { defineProps, defineEmits, ref, onMounted } from 'vue'
import IMask from 'imask'

const props = defineProps<{
  name: string
  label: string
  placeholder: string
  type: 'text' | 'email' | 'tel' | 'password' | 'number' | 'search'
  modelValue: string
}>()

const emit = defineEmits(['update:modelValue'])

const inputRef = ref<HTMLInputElement | null>(null)

const focusInput = () => {
  inputRef.value?.focus()
}

onMounted(() => {
  if (inputRef.value && props.type === 'tel') {
    const mask = IMask(inputRef.value, {
      mask: '(000) 000-0000',
    })

    mask.on('accept', () => {
      emit('update:modelValue', mask.value)
    })
  }
})

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement | null
  if (target) {
    if (props.type === 'tel') {
      target.value = target.value.replace(/[^0-9]/g, '')
    }
    emit('update:modelValue', target.value)
  }
}
</script>

<template>
  <div class="input-contact">
    <label :for="name" class="input-label">{{ label }}</label>
    <div class="input-wrapper" @click="focusInput">
      <input
        ref="inputRef"
        :id="name"
        :name="name"
        :placeholder="placeholder"
        :type="type || 'text'"
        :value="modelValue"
        @input="onInput"
        class="input-field"
        :maxlength="type === 'tel' ? 14 : undefined"
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

@media (max-width: 900px) {
  .input-label {
    font-size: 16px;
    line-height: 100%;
  }
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
  cursor: pointer;
}

@media (max-width: 900px) {
  .input-wrapper {
    padding: 8px;
    padding-right: 15px;
  }
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
  cursor: pointer;
}

@media (max-width: 900px) {
  .input-field {
    font-size: 16px;
    line-height: 100%;
  }
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

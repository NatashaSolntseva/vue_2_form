<script setup lang="ts">
import { ref, defineEmits, watch } from 'vue'

import FormLayout from '@/components/layout/FormLayout.vue'
import CustomInput from './CustomInput.vue'
import { INPUT_FIELDS, type InputsData } from './ContactForm.const'

const emits = defineEmits<{
  (
    event: 'update:contact',
    value: { name: string; email: string; phone: string; company: string },
  ): void
}>()

// ref создает контейнер, который отслеживает изменения своего значения
// Когда любое из полей объекта изменяется, Vue автоматически отслеживает
// это изменение и обновляет связанные компоненты, использующие эти данные.
const formData = ref<InputsData>({
  name: '',
  email: '',
  phone: '',
  company: '',
})

// methods вызываются вручную
// watch автоматически реагирует на изменения данных.

watch(
  () => formData.value,
  (newValue) => {
    emits('update:contact', newValue)
  },
  { deep: true },
)
</script>

<template>
  <FormLayout title="Contact details" subtitle="Lorem ipsum dolor sit amet consectetur adipiscing.">
    <CustomInput
      v-for="field in INPUT_FIELDS"
      :key="field.name"
      :name="field.name"
      :label="field.label"
      :placeholder="field.placeholder"
      :type="field.type"
      v-model="formData[field.name]"
    >
      <img :src="field.icon" :alt="field.label" />
    </CustomInput>
  </FormLayout>
</template>

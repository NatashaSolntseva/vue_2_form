<script setup lang="ts">
import { ref, defineEmits, watch } from 'vue'

import FormLayout from '@/components/layout/FormLayout.vue'

import InputContact from '@/components/forms/InputContact.vue'
import IconAvatar from '@/components/icons/IconAvatar.vue'
import IconEmail from '@/components/icons/IconEmail.vue'
import IconPhone from '@/components/icons/IconPhone.vue'
import IconCompany from '@/components/icons/IconCompany.vue'

const emits = defineEmits<{
  (
    event: 'update:contact',
    value: { name: string; email: string; phone: string; company: string },
  ): void
}>()

// ref создает контейнер, который отслеживает изменения своего значения
// Когда любое из полей объекта изменяется, Vue автоматически отслеживает
// это изменение и обновляет связанные компоненты, использующие эти данные.
const formData = ref({
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

const inputFields = [
  {
    name: 'name',
    label: 'Name',
    placeholder: 'John Carter',
    type: 'text',
    icon: IconAvatar,
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Email address',
    type: 'email',
    icon: IconEmail,
  },
  {
    name: 'phone',
    label: 'Phone Number',
    placeholder: '(123) 456 - 7890',
    type: 'tel',
    icon: IconPhone,
  },
  {
    name: 'company',
    label: 'Company',
    placeholder: 'Company name',
    type: 'text',
    icon: IconCompany,
  },
] as const
</script>

<template>
  <FormLayout title="Contact details" subtitle="Lorem ipsum dolor sit amet consectetur adipiscing.">
    <InputContact
      v-for="field in inputFields"
      :key="field.name"
      :name="field.name"
      :label="field.label"
      :placeholder="field.placeholder"
      :type="field.type"
      v-model="formData[field.name]"
    >
      <component :is="field.icon" />
    </InputContact>
  </FormLayout>
</template>

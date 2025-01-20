<script setup lang="ts">
import { ref } from 'vue'
import SharedButton from '@/components/shared/SharedButton.vue'
import SharedDivider from '@/components/shared/SharedDivider.vue'
import StepsCounter from '@/components/forms/StepsCounter.vue'

import ContactForm from '@/components/forms/ContactForm.vue'
import OurServicesForm from '@/components/forms/OurServicesForm.vue'
import BudgetForm from '@/components/forms/BudgetForm.vue'
import SubmitForm from '@/components/forms/SubmitForm.vue'

const currentStep = ref(1)
const totalSteps = 4

const onNextClick = () => {
  if (currentStep.value < totalSteps) {
    currentStep.value += 1
  }
}

const onPrevClick = () => {
  if (currentStep.value > 1) {
    currentStep.value -= 1
  }
}

interface FormData {
  contact: {
    name: string
    email: string
    phone: string
    company: string
  }
  services: string[]
  budget: string
}

const formData = ref<FormData>({
  contact: {
    name: '',
    email: '',
    phone: '',
    company: '',
  },
  services: [],
  budget: '',
})

function handleSubmit() {
  const cleanData = JSON.parse(JSON.stringify(formData.value))
  localStorage.setItem('formData', JSON.stringify(cleanData))
  console.log('Submitted Data:', cleanData)
}
</script>

<template>
  <div class="multi-step-form">
    <div class="form-header">
      <h2 class="form-title">Get a project quote</h2>
      <p class="form-subtitle">
        Please fill the form below to receive a quote for your project. Feel free to add as much
        detail as needed.
      </p>
    </div>
    <div class="form-wrapper">
      <StepsCounter :current-step="currentStep" :total-steps="totalSteps" />
      <SharedDivider />
      <div>
        <ContactForm
          v-if="currentStep === 1"
          :contact="formData.contact"
          @update:contact="formData.contact = $event"
        />
        <OurServicesForm
          v-else-if="currentStep === 2"
          :services="formData.services"
          @update:services="formData.services = $event"
        />
        <BudgetForm
          v-else-if="currentStep === 3"
          :budget="formData.budget"
          @update:budget="formData.budget = $event"
        />
        <SubmitForm v-else-if="currentStep === 4" :onSubmit="handleSubmit" />
      </div>
    </div>
    <div class="buttons-wrapper">
      <div class="button-placeholder">
        <SharedButton
          text="Previous step"
          :is-outlined="true"
          @click="onPrevClick"
          v-if="currentStep > 1"
        />
      </div>
      <SharedButton text="Next step" @click="onNextClick" v-if="currentStep < totalSteps" />
    </div>
  </div>
</template>

<style scoped>
.multi-step-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding-block: 50px 100px;
}

.form-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 42px;
}

.form-title {
  font-size: 34px;
  line-height: 135%;
  color: var(--neutral-800);
  margin-bottom: 12px;
}

.form-subtitle {
  max-width: 566px;
  font-size: 18px;
  line-height: 170%;
  color: var(--neutral-600);
}

.form-wrapper {
  border: 1px solid var(--neutral-300);
  border-radius: 34px;
  width: 100%;
  box-shadow: 0 5px 16px 0 rgba(8, 15, 52, 0.06);
  margin-bottom: 32px;
  min-height: 606px;
  padding: 32px 46px 80px 46px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.buttons-wrapper {
  display: flex;
  justify-content: space-between;
}

.button-placeholder {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 1px;
}
</style>

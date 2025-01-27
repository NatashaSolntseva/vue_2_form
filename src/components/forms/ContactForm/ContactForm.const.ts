import avatar from '@/assets/icons/inputs/avatar.svg'
import email from '@/assets/icons/inputs/email.svg'
import phone from '@/assets/icons/inputs/phone.svg'
import company from '@/assets/icons/inputs/company.svg'

export type InputsData = {
  name: string
  email: string
  phone: string
  company: string
}

export const INPUT_FIELDS: {
  name: keyof InputsData
  label: string
  placeholder: string
  type: 'text' | 'email' | 'tel' | 'password' | 'number' | 'search'
  icon: string
}[] = [
  {
    name: 'name',
    label: 'Name',
    placeholder: 'John Carter',
    type: 'text',
    icon: avatar,
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Email address',
    type: 'email',
    icon: email,
  },
  {
    name: 'phone',
    label: 'Phone Number',
    placeholder: '(123) 456 - 7890',
    type: 'tel',
    icon: phone,
  },
  {
    name: 'company',
    label: 'Company',
    placeholder: 'Company name',
    type: 'text',
    icon: company,
  },
]

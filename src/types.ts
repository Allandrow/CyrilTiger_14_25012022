export type { Option } from './data/states'
export type { UpdateField } from '@/modules/form'

export type Employee = {
  key: string
  firstName: string
  lastName: string
  dateOfBirth: Date | string
  startDate: Date | string
  street: string
  city: string
  state: string
  zipCode: string
  department: string
}

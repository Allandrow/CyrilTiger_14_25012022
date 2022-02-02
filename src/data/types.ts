import { FormEvent } from 'react'

export type State = {
  name: string
  abbreviation: string
}

export type Employee = {
  firstName: string
  lastName: string
  dateOfBirth: string
  startDate: string
  street: string
  city: string
  state: string
  zipCode: string
  department: string
}

export interface HeaderProps {
  link: string
  text: string
}

export interface InputWrapperProps {
  label: string
  type?: string
  name: string
  value: string
  placeholder?: string
  handler: (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export interface SelectWrapperProps {
  label: string
  name: string
  handler: (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => void
  init: (value: string, name: string) => void
  content: string
}

export type OptionsState = State[] | []

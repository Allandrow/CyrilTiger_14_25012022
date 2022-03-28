export type Option = {
  name: string
  abbreviation: string
}

export type OptionsState = Option[] | undefined

export type Employee = {
  key: string
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

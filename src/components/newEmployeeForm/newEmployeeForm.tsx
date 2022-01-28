import { FormEvent, SyntheticEvent, useState } from 'react'
import { departments, states } from '../../data/selectData'
import { InputWrapper } from '../inputWrapper/InputWrapper'
import { SelectWrapper } from '../selectWrapper/SelectWrapper'

type OptionalString = string | undefined
type OptionalNumber = number | undefined
type Employee = {
  firstName: OptionalString
  lastName: OptionalString
  dateOfBirth: OptionalString
  startDate: OptionalString
  street: OptionalString
  city: OptionalString
  state: OptionalString
  zipCode: OptionalNumber
  department: OptionalString
}

export const NewEmployeeForm = () => {
  const initialEmployeeState = {
    firstName: undefined,
    lastName: undefined,
    dateOfBirth: undefined,
    startDate: undefined,
    street: undefined,
    city: undefined,
    state: undefined,
    zipCode: undefined,
    department: undefined,
  } as Employee

  const [employee, setEmployee] = useState(initialEmployeeState)

  const handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.currentTarget
    setEmployee((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    console.log(employee)
  }

  return (
    <form>
      <InputWrapper
        label="First Name"
        name="firstName"
        handler={handleChange}
        placeholder="Employee's first name"
      />
      <InputWrapper
        label="Last Name"
        name="lastName"
        handler={handleChange}
        placeholder="Employee's last name"
      />
      <InputWrapper
        label="Date of Birth"
        type="date"
        name="dateOfBirth"
        handler={handleChange}
        placeholder="dd/mm/yyyy"
      />
      <InputWrapper
        label="Start Date"
        type="date"
        name="startDate"
        handler={handleChange}
        placeholder="dd/mm/yyyy"
      />
      <fieldset>
        <legend>Adress</legend>
        <InputWrapper
          label="Street"
          name="street"
          handler={handleChange}
          placeholder="Street number and name"
        />
        <InputWrapper
          label="City"
          name="city"
          handler={handleChange}
          placeholder="City name"
        />
        <SelectWrapper
          label="State"
          name="state"
          handler={handleChange}
          data={states}
        />
        <InputWrapper
          label="Zip Code"
          name="zipCode"
          type="number"
          handler={handleChange}
        />
      </fieldset>
      <SelectWrapper
        label="Department"
        name="department"
        handler={handleChange}
        data={departments}
      />
      <button onClick={handleSubmit}>Save</button>
    </form>
  )
}

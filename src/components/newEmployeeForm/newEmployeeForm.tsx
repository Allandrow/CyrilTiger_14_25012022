import { FormEvent, SyntheticEvent, useState } from 'react'
import { Employee } from '../../data/types'
import { InputWrapper } from '../inputWrapper/InputWrapper'
import { SelectWrapper } from '../selectWrapper/SelectWrapper'

export const NewEmployeeForm = () => {
  const initialEmployeeState = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
  } as Employee

  const [employee, setEmployee] = useState(initialEmployeeState)

  const handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.currentTarget
    setEmployee((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleInit = (value: string, name: string) => {
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
        value={employee.firstName}
        handler={handleChange}
        placeholder="Employee's first name"
      />
      <InputWrapper
        label="Last Name"
        name="lastName"
        value={employee.lastName}
        handler={handleChange}
        placeholder="Employee's last name"
      />
      <InputWrapper
        label="Date of Birth"
        type="date"
        name="dateOfBirth"
        value={employee.dateOfBirth}
        handler={handleChange}
        placeholder="dd/mm/yyyy"
      />
      <InputWrapper
        label="Start Date"
        type="date"
        name="startDate"
        value={employee.startDate}
        handler={handleChange}
        placeholder="dd/mm/yyyy"
      />
      <fieldset>
        <legend>Adress</legend>
        <InputWrapper
          label="Street"
          name="street"
          value={employee.street}
          handler={handleChange}
          placeholder="Street number and name"
        />
        <InputWrapper
          label="City"
          name="city"
          value={employee.city}
          handler={handleChange}
          placeholder="City name"
        />
        <SelectWrapper
          label="State"
          name="state"
          handler={handleChange}
          init={handleInit}
          content="states"
        />
        <InputWrapper
          label="Zip Code"
          name="zipCode"
          type="number"
          value={employee.zipCode}
          handler={handleChange}
        />
      </fieldset>
      <SelectWrapper
        label="Department"
        name="department"
        handler={handleChange}
        init={handleInit}
        content="departments"
      />
      <button onClick={handleSubmit}>Save</button>
    </form>
  )
}

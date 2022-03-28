import axios from 'axios'
import { FormEvent, SyntheticEvent, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { Employee } from '../../types'
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

  const queryClient = useQueryClient()

  const addEmployee = (employee: Employee) => {
    return axios.post('/employees', employee)
  }

  const mutation = useMutation(addEmployee, {
    onSuccess: async ({ data }) => {
      queryClient.invalidateQueries('employees')
      queryClient.setQueryData('employees', data)
    },
  })

  const updateEmployeeField = (name: string, value: string) => {
    setEmployee((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.currentTarget
    updateEmployeeField(name, value)
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    mutation.mutate(employee)
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
        <legend>Address</legend>
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
          init={updateEmployeeField}
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
        init={updateEmployeeField}
        content="departments"
      />
      <button onClick={handleSubmit}>Save</button>
    </form>
  )
}

import axios from 'axios'
import { FormEvent, SyntheticEvent, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { DateWrapper } from '../dateWrapper/DateWrapper'
import { InputWrapper } from '../inputWrapper/InputWrapper'
import { SelectWrapper } from '../selectWrapper/SelectWrapper'

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

export type HandleDateChange = (value: Date, name: string) => void

const padLeft = (value: string) => {
  return value.length < 2 ? `0${value}` : value
}

const getDateString = (date: Date): string => {
  const days = date.getDate().toString()
  const month = (date.getMonth() + 1).toString()
  const year = date.getFullYear().toString()

  return `${padLeft(month)}/${padLeft(days)}/${year}`
}

const formatEmployeeDates = (employee: Employee): Employee => {
  return {
    ...employee,
    dateOfBirth: getDateString(employee.dateOfBirth as Date),
    startDate: getDateString(employee.startDate as Date),
  }
}

export const Form = () => {
  const initialEmployeeState = {
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    startDate: new Date(),
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
      setEmployee(initialEmployeeState)
    },
  })

  const updateEmployeeField = (name: string, value: string | Date) => {
    setEmployee((prevState: Employee) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.currentTarget
    updateEmployeeField(name, value)
  }

  const handleDateChange: HandleDateChange = (value, name) => {
    updateEmployeeField(name, value)
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    const formattedEmployee = formatEmployeeDates(employee)
    mutation.mutate(formattedEmployee)
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
      <DateWrapper
        label="Date of Birth"
        name="dateOfBirth"
        value={employee.dateOfBirth}
        handler={handleDateChange}
      />
      <DateWrapper
        label="Start Date"
        name="startDate"
        value={employee.startDate}
        handler={handleDateChange}
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
          value={employee.state}
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
        value={employee.department}
      />
      <button onClick={handleSubmit}>Save</button>
    </form>
  )
}

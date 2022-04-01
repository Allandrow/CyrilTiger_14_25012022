import { SyntheticEvent, useState } from 'react'
import { ModalHandler } from '@/pages'
import { Employee } from 'types'
import { useQuery } from 'hooks'
import { Field } from '@/modules/common'

interface FormProps {
  modalHandler: ModalHandler
}

export type UpdateField = (name: string, value: string | Date) => void

export const Form = ({ modalHandler }: FormProps) => {
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

  const mutation = useQuery({
    stateHandler: setEmployee,
    defaultValue: initialEmployeeState,
  })

  const updateEmployeeField: UpdateField = (name, value) => {
    setEmployee((prevState: Employee) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    mutation.mutate(employee)
    modalHandler(true)
  }

  return (
    <form>
      <Field
        label="First Name"
        name="firstName"
        value={employee.firstName}
        handler={updateEmployeeField}
        placeholder="Employee's first name"
      />

      <Field
        label="Last Name"
        name="lastName"
        value={employee.lastName}
        handler={updateEmployeeField}
        placeholder="Employee's last name"
      />

      <Field
        label="Date of Birth"
        type="date"
        name="dateOfBirth"
        value={employee.dateOfBirth}
        handler={updateEmployeeField}
      />

      <Field
        label="Start Date"
        type="date"
        name="startDate"
        value={employee.startDate}
        handler={updateEmployeeField}
      />

      <fieldset>
        <legend>Adress</legend>

        <Field
          label="Street"
          name="street"
          value={employee.street}
          handler={updateEmployeeField}
          placeholder="Street number and name"
        />

        <Field
          label="City"
          name="city"
          value={employee.city}
          handler={updateEmployeeField}
          placeholder="City name"
        />

        <Field
          label="State"
          type="dropdown"
          name="state"
          handler={updateEmployeeField}
          value={employee.state}
        />

        <Field
          label="Zip Code"
          name="zipCode"
          type="number"
          value={employee.zipCode}
          handler={updateEmployeeField}
          placeholder="City Zip Code"
        />
      </fieldset>

      <Field
        label="Department"
        type="dropdown"
        name="department"
        handler={updateEmployeeField}
        value={employee.department}
      />

      <button onClick={handleSubmit}>Save</button>
    </form>
  )
}

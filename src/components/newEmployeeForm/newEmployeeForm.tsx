import { useState } from 'react'

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

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setEmployee((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(employee)
  }

  // TODO : Change event types

  return (
    <form>
      <label>
        <span>First Name</span>
        <input
          type="text"
          name="firstName"
          placeholder="Employee's first name"
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Last Name</span>
        <input
          type="text"
          name="lastName"
          placeholder="Employee's last name"
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Date of Birth</span>
        <input
          type="date"
          name="dateOfBirth"
          placeholder="dd/mm/yyyy"
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Start Date</span>
        <input
          type="date"
          name="startDate"
          placeholder="Employee's starting date"
          onChange={handleChange}
        />
      </label>
      <fieldset>
        <legend>Adress</legend>
        <label>
          <span>Street</span>
          <input
            type="text"
            name="street"
            placeholder="street number and name"
            onChange={handleChange}
          />
        </label>
        <label>
          <span>City</span>
          <input
            type="text"
            name="city"
            placeholder="City name"
            onChange={handleChange}
          />
        </label>
        <label>
          <span>State</span>
          <select name="state" onChange={handleChange}>
            <option value="alabama">Alabama</option>
            <option value="alabama">Alabama</option>
            <option value="alabama">Alabama</option>
            <option value="alabama">Alabama</option>
            <option value="alabama">Alabama</option>
            <option value="alabama">Alabama</option>
            <option value="alabama">Alabama</option>
          </select>
        </label>
        <label>
          <span>Zip Code</span>
          <input type="number" name="zipCode" onChange={handleChange} />
        </label>
      </fieldset>
      <label>
        <span>Department</span>
        <select name="department" onChange={handleChange}>
          <option value="sales">Sales</option>
          <option value="marketing">Narketing</option>
          <option value="engineering">Engineering</option>
          <option value="human-resources">Human Resources</option>
          <option value="legal">Legal</option>
        </select>
      </label>
      <button onClick={handleSubmit}>Save</button>
    </form>
  )
}

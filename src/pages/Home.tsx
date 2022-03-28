import { Link } from 'react-router-dom'
import { NewEmployeeForm } from '../components/newEmployeeForm/newEmployeeForm'

export const Home = () => {
  return (
    <>
      <header>
        <h1>HRnet</h1>
        <Link to={'/employees'}>View Current Employees</Link>
      </header>
      <section className="employee-creation">
        <h2>Create Employee</h2>
        <NewEmployeeForm />
      </section>
    </>
  )
}

import { Header } from '../components/header/Header'
import { NewEmployeeForm } from '../components/newEmployeeForm/newEmployeeForm'

export const Home = () => {
  return (
    <>
      <Header link={'/employees'} text={'View Current Employees'} />
      <section className="employee-creation">
        <h2>Create Employee</h2>
        <NewEmployeeForm />
      </section>
    </>
  )
}

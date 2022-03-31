import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from '@/modules/form'
import { Form } from '../components/form/Form'
import { Header } from '@/modules/common'

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Header title="HRnet">
        <Link to={'/employees'}>View Current Employees</Link>
      </Header>
      <section className="employee-creation">
        <h2>Create Employee</h2>
        <Form handler={setIsOpen} />
      </section>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

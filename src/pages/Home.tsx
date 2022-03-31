import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Modal } from '@/modules/form'
import { Header } from '@/modules/common'

export type ModalHandler = (value: boolean) => void

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Header title="HRnet">
        <Link to={'/employees'}>View Current Employees</Link>
      </Header>

      <section className="employee-creation">
        <h2>Create Employee</h2>
        <Form modalHandler={setIsOpen} />
      </section>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

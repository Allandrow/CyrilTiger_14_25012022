import { Link } from 'react-router-dom'
import ReactModal from 'react-modal'
import { Form } from '../components/form/Form'
import { useState } from 'react'
import { Header } from '@/modules/common'

export const Home = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Header title="HRnet">
        <Link to={'/employees'}>View Current Employees</Link>
      </Header>
      <section className="employee-creation">
        <h2>Create Employee</h2>
        <Form handler={setShowModal} />
      </section>
      <ReactModal
        isOpen={showModal}
        contentLabel={'Employee creation confirmation'}
        onRequestClose={() => setShowModal(false)}
        className={'modal-content'}
        overlayClassName={'modal-overlay'}
        portalClassName={'modal'}
      >
        <p>Employee created !</p>
        <button onClick={() => setShowModal(false)}>X</button>
      </ReactModal>
    </>
  )
}

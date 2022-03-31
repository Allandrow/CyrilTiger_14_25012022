import { Link } from 'react-router-dom'
import ReactModal from 'react-modal'
import { Form } from '../components/form/Form'
import { useState } from 'react'

export const Home = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <header>
        <h1>HRnet</h1>
        <Link to={'/employees'}>View Current Employees</Link>
      </header>
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

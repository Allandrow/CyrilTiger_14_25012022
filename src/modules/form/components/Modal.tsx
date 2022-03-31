import ReactModal from 'react-modal'

interface ModalProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

export const Modal = ({ isOpen, setIsOpen }: ModalProps) => {
  ReactModal.setAppElement('#root')

  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel={'Employee creation confirmation'}
      onRequestClose={() => setIsOpen(false)}
      className={'modal-content'}
      overlayClassName={'modal-overlay'}
      portalClassName={'modal'}
    >
      <p>Employee created !</p>
      <button onClick={() => setIsOpen(false)}>X</button>
    </ReactModal>
  )
}

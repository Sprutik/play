import { useRef, useState } from 'react'
import Modal from 'react-modal'

import './Navigation.scss'

export const Navigation = () => {
  const burgerMenu = useRef(null)

  const toggleBtn = () => {
    burgerMenu.current.classList.toggle('active')
  }

  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
    toggleBtn()
  }

  const closeModal = () => {
    setIsOpen(false)
    toggleBtn()
  }

  return (
    <nav>
      <div className="burger-container" onClick={openModal}>
        <div className="burger-btn" ref={burgerMenu}></div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="overlay"
        className="menu"
        contentLabel="Example Modal"
      ></Modal>
    </nav>
  )
}

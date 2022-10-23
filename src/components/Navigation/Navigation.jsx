import { useRef, useState } from 'react'
import Modal from 'react-modal'

import './Navigation.scss'

export const Navigation = () => {
  const burgerMenu = useRef(null)
  const [modalIsOpen, setIsOpen] = useState(false)

  const toggleBtn = () => {
    burgerMenu.current.classList.toggle('active')
  }

  const openModal = () => {
    setIsOpen(true)
    toggleBtn()
  }

  const closeModal = () => {
    setIsOpen(false)
    toggleBtn()
  }

  const onBtn = () => {
    if (burgerMenu.current.classList.contains('active')) {
      closeModal()
    } else {
      openModal()
    }
  }

  return (
    <nav>
      <div className="burger-container" onClick={onBtn}>
        <div className="burger-btn" ref={burgerMenu}></div>
      </div>
      <Modal
        closeTimeoutMS={250}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="overlay"
        className="menu"
        contentLabel="Example Modal"
      >
        <div className="nav-container">
          <a href="rules" className="nav-link">
            ПРАВИЛА
          </a>
          <a href="start" className="nav-link">
            ПОЧАТИ ГРАТИ
          </a>
          <a href="commands" className="nav-link">
            КОМАНДИ
          </a>
          <a href="donate" className="nav-link">
            ДОНАТ
          </a>
          <a href="premium" className="nav-link">
            ПРЕМІУМ
          </a>
          <a href="rules" className="nav-link">
            МАПА СВІТУ
          </a>
          <a href="faq" className="nav-link">
            ЧАПИ
          </a>
          {/* <a href="rules" className="nav-link">
            ГАЛЕРЕЯ
          </a>
          <a href="rules" className="nav-link">
            РЕЙТИНГ
          </a>
          <a href="rules" className="nav-link">
            ВАКАНСІЇ
          </a> */}
          <a href="about" className="nav-link">
            ПРО НАС
          </a>
        </div>
      </Modal>
    </nav>
  )
}

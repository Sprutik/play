import { useRef, useState } from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'

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
          <a href="https://login.playcraft.com.ua/" className="nav-link">
            ОСОБИСТИЙ КАБІНЕТ
          </a>
          <Link className="nav-link" to="/rules">
            ПРАВИЛА
          </Link>
          <Link to="start" className="nav-link">
            ПОЧАТИ ГРАТИ
          </Link>
          <Link to="commands" className="nav-link">
            КОМАНДИ
          </Link>
          <Link to="donate" className="nav-link">
            ДОНАТ
          </Link>
          <Link to="premium" className="nav-link">
            ПРЕМІУМ
          </Link>
          <a href="https://map.playcraft.com.ua/" className="nav-link">
            МАПА СВІТУ
          </a>
          <Link to="faq" className="nav-link">
            ЧАПИ
          </Link>
          {/* <itohref="rules" className="nav-link">
            ГАЛЕРЕЯ
          </Link>
          <Link to="rules" className="nav-link">
            РЕЙТИНГ
          </Link>
          <Link to="rules" className="nav-link">
            ВАКАНСІЇ
          </Link> */}
          <Link to="about" className="nav-link">
            ПРО НАС
          </Link>
        </div>
      </Modal>
    </nav>
  )
}

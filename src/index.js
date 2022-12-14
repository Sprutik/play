import React from 'react'
import ReactDOM from 'react-dom/client'
import Modal from 'react-modal'

import './styles/reset.scss'
import './styles/fonts.scss'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
Modal.setAppElement('#root')

root.render(<App />)

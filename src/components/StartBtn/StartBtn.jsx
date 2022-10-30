import React from 'react'
import { Link } from 'react-router-dom'

import './StartBtn.scss'

export const StartBtn = () => {
  return (
    <Link to="start" className="download-btn">
      ПОЧАТИ ГРАТИ
    </Link>
  )
}

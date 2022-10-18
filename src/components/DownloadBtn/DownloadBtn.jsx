import React from 'react'

import './DownloadBtn.scss'

export const DownloadBtn = () => {
  const isWidnows = () => {
    return navigator.userAgentData.platform === 'Windows'
  }

  return (
    <a
      className="download-btn"
      href={
        isWidnows
          ? 'https://launcher.playcraft.com.ua/PlayCraft.exe'
          : 'https://launcher.playcraft.com.ua/PlayCraft.jar'
      }
      download
    >
      Download
    </a>
  )
}

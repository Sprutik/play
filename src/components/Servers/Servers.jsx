import { useState, useEffect } from 'react'
import { ServerInfo } from '../ServerInfo/ServerInfo'
import './Servers.scss'

export const Servers = () => {
  const [serverInfo, setServerInfo] = useState({
    first: { current: 0, max: 100 },
    second: { current: 20, max: 100 },
  })

  const getInfo = useEffect(() => {
    fetch(
      `https://login.playcraft.com.ua/action.php?action=status&ip=playcraft.com.ua&port=25565`
    )
      .then((response) => response.json())
      .then((response) =>
        setServerInfo((prevState) => {
          return {
            ...prevState,
            first: { current: response.Players, max: response.MaxPlayers },
          }
        })
      )
  }, [])

  return (
    <div className="servers-container">
      <ServerInfo name="VANILA" info={serverInfo.first} color={'#f18b6d'} />
      <ServerInfo
        name="PLAYCRAFT II скоро..."
        info={serverInfo.second}
        color={'#f1d204'}
      />
    </div>
  )
}

import { ServerInfo } from '../ServerInfo/ServerInfo'
import './Servers.scss'

export const Servers = () => {
  const rand = () => Math.floor(Math.random() * 100)

  const servers = {
    first: { name: 'Vanila', current: rand(), max: 100 },
    second: { name: 'Tech', current: rand(), max: 100 },
  }

  return (
    <div className="servers-container">
      <ServerInfo info={servers.first} color={'#f18b6d'} />
      <ServerInfo info={servers.second} color={'#f1d204'} />
    </div>
  )
}

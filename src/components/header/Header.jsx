import { Navigation } from '../Navigation/Navigation'
import './Header.scss'
import logo from '../../assets/img/playcraft.png'

export const Header = () => {
  return (
    <header className="header">
      <a className="logo-container" href="/">
        <img className="logo-icon" src={logo} alt="logo" />
        <h1 className="logo">PLAYCRAFT</h1>
      </a>

      <Navigation />
    </header>
  )
}

import { Navigation } from '../Navigation/Navigation'
import './Header.scss'

export const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="logo">PLAYCRAFT</h1>
      </div>

      <Navigation />
    </header>
  )
}

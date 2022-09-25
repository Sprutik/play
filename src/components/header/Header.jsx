import Navigation from '../Navigation/Navigation'
import './Header.scss'

function Header() {
  return (
    <header>
      <div className="header-main">
        <h1>PLAYCRAFT</h1>

        <Navigation />
      </div>
    </header>
  )
}

export default Header

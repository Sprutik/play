import './Footer.scss'

import logo from '../../assets/img/playcraft.png'
import telegram from '../../assets/icons/tg.png'
import fb from '../../assets/icons/fb.png'
import discord from '../../assets/icons/discord.png'
import instagram from '../../assets/icons/instagram.png'
import youtube from '../../assets/icons/youtube.png'
import heart from '../../assets/icons/heart.svg'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-card">
        <img className="icon" src={logo} alt="logo" />
        <div className="links">
          <div className="copyright">PLAYCRAFT © 2012-2022</div>
          <div className="socials">
            <a
              className="social"
              href="https://t.me/playcraftua"
              rel="noreferrer"
              target="_blank"
            >
              <img className="social-icon" alt="telegram" src={telegram} />
            </a>
            <a
              className="social"
              href="https://fb.com/playcraftnews"
              rel="noreferrer"
              target="_blank"
            >
              <img className="social-icon" alt="facebook" src={fb} />
            </a>
            <a
              className="social"
              href="https://discord.gg/dBcwzTE"
              rel="noreferrer"
              target="_blank"
            >
              <img className="social-icon" alt="discord" src={discord} />
            </a>
            <a
              className="social"
              href="https://instagram.com/playcraftua/"
              rel="noreferrer"
              target="_blank"
            >
              <img className="social-icon" alt="instagram" src={instagram} />
            </a>
            <a
              className="social"
              href="https://youtube.com/channel/UCiLxatdBOEb2bcf7eiKxuQg"
              rel="noreferrer"
              target="_blank"
            >
              <img className="social-icon" alt="youtube" src={youtube} />
            </a>
          </div>
          <div className="email">
            <a href="mailto:playcraftua@gmail.com">playcraftua@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="footer-right">
        <Link className="footer-link" to="privacy">
          Політика конфіденційності
        </Link>
        <Link className="footer-link" to="agreement">
          Договір публічної оферти
        </Link>
        <div className="flex-grow" />
        <div className="with-love">
          З любов'ю, PlayCraft
          <img className="heart" alt="heart" src={heart} />
        </div>
      </div>
    </div>
  )
}

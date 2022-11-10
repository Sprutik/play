import { SignUpBtn } from '../../components/SignUpBtn/SignUpBtn'
import { StartBtn } from '../../components/StartBtn/StartBtn'
import { Servers } from '../../components/Servers/Servers'
import { Counters } from '../../components/Counters/Counters'

import playUA from '../../assets/img/partners/playua.png'

import './Main.scss'
import { ReviewSlider } from '../../components/ReviewSlider/ReviewSlider'

export const Main = () => {
  const donterNick = 'JohnIsKing'
  const builderNick = 'Tuteshnij'
  const date = new Date()
  date.setMonth(date.getMonth() - 1)

  return (
    <main>
      <section>
        <div className="section-outer section-top">
          <div className="section-inner">
            <h1 className="label-main">PLAYCRAFT</h1>
            <p className="label-text">Перший український</p>
            <p className="label-text">майнкрафт сервер</p>

            <div className="btns-container">
              <SignUpBtn />
              <StartBtn />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="section-outer section-about">
          <div className="section-inner">
            <h2 className="about-label">СЕРВЕР:</h2>
            <p className="about-text">
              PlayCraft - перший український та Україномовний майнкрафт сервер.
              Сервер з теплою атмосферою, історія якого починається в далекому
              2012 році та триває досі.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="section-outer section-servers">
          <div className="section-inner">
            <Servers />
          </div>
        </div>
      </section>
      <section>
        <div className="section-outer section-counters">
          <div className="section-inner counter-conent">
            <div className="counter-quote">
              <div>
                ...У кождого в руках тяжкий залізний молот, І голос сильний нам
              </div>
              <div>
                згори, як грім, гримить: "Лупайте сю скалу! Нехай ні жар, ні
                холод
              </div>
              <div>
                Не спинить вас! Зносіть і труд, і спрагу, й голод, Бо вам
              </div>
              <div>
                призначено скалу сесю розбить."... І.Франко - "Каменярі"
              </div>
            </div>
            <div className="counter-timer">
              <h2 className="counter-label">Сервер існує:</h2>
              <Counters />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="section-outer section-winers">
          <div className="section-inner winers-content">
            <div className="winer-date">
              {date.toLocaleString('default', { month: 'long' })}
            </div>
            <div className="winer-container">
              <div className="winer-donater">
                <div className="winer-label"> Донатер місяця:</div>
                <div
                  className="skin"
                  style={{
                    backgroundImage: `url(https://login.playcraft.com.ua/action.php?action=skin&size=300&nick=${donterNick})`,
                  }}
                ></div>
                <p className="winers-nick">{donterNick}</p>
              </div>
              <div className="winer-donater">
                <div className="winer-label"> Будівельник місяця:</div>
                <div
                  className="skin"
                  style={{
                    backgroundImage: `url(https://login.playcraft.com.ua/action.php?action=skin&size=300&nick=${builderNick})`,
                  }}
                ></div>
                <p className="winers-nick">{builderNick}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-outer section-reviews">
          <div className="section-inner">
            <h2 className="review-label">ВІДГУКИ</h2>
            <ReviewSlider />
          </div>
        </div>
      </section>
      <section>
        <div className="section-outer section-projects">
          <div className="projects-container">
            <div className="section-inner">
              <h2 className="projects-label">НАШІ ДРУЗІ:</h2>
            </div>
            <div className="projects-images">
              <a
                href="https://playua.net/"
                rel="noreferrer"
                target="_blank"
                className="project-img-container"
              >
                <img className="project-img" alt="project-img3" src={playUA} />
              </a>
              <a
                className="playua-desc"
                href="https://playua.net/"
                rel="noreferrer"
                target="_blank"
              >
                PlayUA — українське інтернет-видання, засноване 2009 року,
                основною тематикою якого є індустрія відеоігор.
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

import './ReviewSlider.scss'

import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

export const ReviewSlider = () => {
  return (
    <div className="reviews">
      <Slide>
        <div className="slide">
          <ReviewFragment
            nick="mik787"
            quote="Скажу банальність: ПлейКрафт - це перший український Майкрафт сервер. ПлейКрафт - це нові і старі друзі. ПлейКрафт - це сім'я."
          />
        </div>
        <div className="slide">
          <ReviewFragment
            nick="doctorjuta"
            quote="Основний сервер з якого почався український minecraft. Тут ніколи не було шкода переживати вайп і починати все заново - завше були якісь ідеї на новий світ і на нову гру."
          />
        </div>
        <div className="slide">
          <ReviewFragment
            nick="kuzia13666"
            quote={
              <div>
                PlayCraft — це той сервак, про який завжди тільки теплі спогади.
                Спогади, як ми з друзями ночами зависали на сервері і завжди
                було з ким поговорити. Це був той період, коли можна було
                декілька годин готуватися до якоїсь пакості, щоб відімстити Міку
                за розкиданих курок по дому. Це купа друзів, з якими можна не
                тільки побавитись, а ще і піти потусити IRL. PlayCraft то{' '}
                <span className="ico ico-heart">
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                  <span className="path4"></span>
                </span>
              </div>
            }
          />
        </div>
        <div className="slide">
          <ReviewFragment
            nick="Master21"
            quote={`Сервер PlayCraft може виділитись з-поміж інших своїм міцним стержнем. До якого доклали і досі докладають руку багато людей. Як гравці так і адміністратори. За 8 рік існування сервер приміряв на себе багато образів, змінив безліч гравців та локацій. Проте, помимо цього він залишається на плаву і є тим самим "ламповим" місцем куди можна зайти й цікаво провести час. PlayCraft - це не зелений майданчик для биття дерев рукою. Це різностороннє місце з живими людьми.`}
          />
        </div>
      </Slide>
    </div>
  )
}

const ReviewFragment = ({ nick, quote }) => {
  return (
    <div className="review">
      <div className="reviewer">
        <img
          className="photo"
          alt="skin head"
          src={`https://login.playcraft.com.ua/action.php?action=head&nick=${nick}&size=200`}
        />
        <div className="name">{nick}</div>
      </div>
      <div className="review-text">
        <div className="quote-start" />
        <div className="quote">{quote}</div>
        <div className="quote-end" />
      </div>
    </div>
  )
}

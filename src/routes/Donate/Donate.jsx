import './Donate.scss'
import paymentImg from '../../assets/img/payment_systems.png'
import { Button } from '../../components/Button/Button'

export const Donate = () => {
  return (
    <section>
      <div className="section-outer donate">
        <div className="section-inner donate-content">
          <h2 className="donate-label">DONATE</h2>
          <div className="credits">
            <div className="add">
              <p className="donate-text">1 ГРИВНЯ = 100 CREDITS</p>
              <Button
                str="ПОПОВНИТИ РАХУНОК"
                link="https://playcraft.com.ua/autodonate"
              />
            </div>
            <img
              src={paymentImg}
              alt="payment-systems"
              className="payment-systems"
            />

            <p className="donate-small-text">
              Кошти за придбані товари/послуги поверненню чи обміну не
              підлягають.
            </p>
          </div>
          <div className="donate-separator"></div>

          <div className="donate-about">
            <div className="donate-about-block">
              <h2 className="donate-about-label">ІНШІ ПОСЛУГИ</h2>
              <div>
                <ul className="donate-ul">
                  <li>
                    <p className="donate-about-text">РОЗБАН - 200 ГРИВЕНЬ </p>
                  </li>
                  <li>
                    <p className="donate-about-text">
                      ЗМІНА НІКУ - 200 ГРИВЕНЬ
                    </p>
                  </li>
                  <li>
                    <p className="donate-about-text">
                      Звертатися до{' '}
                      <a
                        href="https://t.me/playcraftsupport"
                        rel="noreferrer"
                        target="_blank"
                      >
                        @playcraftsupport
                      </a>
                    </p>
                  </li>
                </ul>
                <p className="donate-about-text"></p>
                <p className="donate-about-text"></p>
                <p className="donate-about-text"></p>
              </div>
            </div>
            <div className="donate-about-block">
              <h2 className="donate-about-label">ПІДТРИМКА</h2>
              <div>
                <p className="donate-about-text">
                  Якщо у вас виникли проблеми з поповненням або ви бажаєте
                  поповнити баланс іншим способом (SEPA, ets.) зверніться у нашу
                  підтримку -
                  <a
                    href="https://t.me/playcraftsupport"
                    rel="noreferrer"
                    target="_blank"
                  >
                    @playcraftsupport
                  </a>
                </p>
              </div>
            </div>
            <div className="donate-about-block">
              <h2 className="donate-about-label">ОСОБЛИВОСТІ ДОНАТУ</h2>
              <div>
                <ul className="donate-ul">
                  <li>
                    <p className="donate-about-text">
                      кошти нараховуються моментально на ваш акаунт
                    </p>
                  </li>
                  <li>
                    <p className="donate-about-text">
                      комісію оплачує сервер, тому ви отримуєте все до останньої
                      копійки
                    </p>
                  </li>
                  <li>
                    <p className="donate-about-text">
                      кожна ваша гривня - це підтримка серверу
                    </p>
                  </li>
                  <li>
                    <p className="donate-about-text">
                      поповнити свій рахунок можна з картки будь якого банку
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="donate-about-block">
              <h2 className="donate-about-label">
                ІНФОРМАЦІЯ ПРО БЕЗПЕКУ ПОПОВНЕННЯ ТА ЦІЛІ
              </h2>
              <div>
                <p className="donate-about-text">
                  Усі кошти які отримує проект PlayCraft, ми зобов'язуємося
                  витрачати лише на його утримання та розвиток. Проект є
                  некомерційним. Ціль проекту - це його життя, створення
                  комунікації між людьми які знайомляться на ньому та просто
                  хороший настрій. За 10 років роботи, проект довів, що він є
                  чесним та справедливим. Його існування об'єднало багатьох
                  людей які товаришують і досі.
                </p>
                <p className="donate-about-text">
                  Гарантією безпеки власних даних та коштів є власна
                  хост-машина.
                </p>
              </div>
            </div>
          </div>
          <p className="donate-bottom-text">
            ПРИДБАТИ ДАНІ ПАКЕТИ МОЖНА НА СЕРВЕРІ ЗА ДОПОМОГОЮ КОМАНДИ /DONATE
          </p>
        </div>
      </div>
    </section>
  )
}

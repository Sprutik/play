import './Premium.scss'

import okImg from '../../assets/icons/ok.png'
import notOkImg from '../../assets/icons/not-ok.png'
import { Button } from '../../components/Button/Button'

export const Premium = () => {
  return (
    <section>
      <div className="section-outer premium">
        <div className="section-inner premium-content">
          <h2 className="premium-label"> Пакети послуг: </h2>
          <p className="premium-text ">
            <span className="kozak">20%</span> відправляємо на армію
          </p>
          <p className="premium-text">
            та <span className="kozak">50%</span> додатково від
            <span className="nationalist"> {'<< Націоналіст >>'}</span>
          </p>

          <table className="premium-table">
            <thead>
              <tr className="row-1">
                <th>Послуги</th>
                <th>
                  <span className=" status">Селянин</span>
                </th>
                <th>
                  <span className="kozak status">Козак</span>
                </th>
                <th>
                  <span className="nationalist status">Націоналіст</span>
                </th>
                <th>
                  <span className="getman status">Гетьман</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="row-2">
                <td>Привати</td>
                <td>3</td>
                <td>5</td>
                <td>20</td>
                <td>50</td>
              </tr>
              <tr className="row-1">
                <td>Домівки</td>
                <td>3</td>
                <td>5</td>
                <td>20</td>
                <td>50</td>
              </tr>
              <tr className="row-2">
                <td>Кількість лотів на аукціоні</td>
                <td>3</td>
                <td>6</td>
                <td>12</td>
                <td>24</td>
              </tr>
              <tr className="row-1">
                <td>
                  <span>Колір ніку </span>
                </td>
                <td>
                  <span>WHITE</span>
                </td>
                <td>
                  <span className="kozak">YELLOW</span>
                </td>
                <td>
                  <span className="nationalist">DARK GREEN</span>
                </td>
                <td>
                  <span className="getman">DARK PURPLE</span>
                </td>
              </tr>
              <tr className="row-2">
                <td>/hat</td>
                <td>
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
              </tr>
              <tr className="row-1">
                <td>/wbench</td>
                <td>
                  {' '}
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
              </tr>
              <tr className="row-2">
                <td>Плащ</td>
                <td>
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
              </tr>
              <tr className="row-1">
                <td>Ковадло</td>
                <td>
                  {' '}
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
              </tr>
              <tr className="row-2">
                <td>Картографічний стіл</td>
                <td>
                  {' '}
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
              </tr>
              <tr className="row-1">
                <td>Каменеріз</td>
                <td>
                  {' '}
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
              </tr>
              <tr className="row-2">
                <td>Точило</td>
                <td>
                  {' '}
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
              </tr>
              <tr className="row-1">
                <td>Ткацький верстат</td>
                <td>
                  {' '}
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
              </tr>
              <tr className="row-2">
                <td>Стіл коваля</td>
                <td>
                  {' '}
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
              </tr>
              <tr className="row-1">
                <td>Смітник</td>
                <td>
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
              </tr>
              <tr className="row-2">
                <td>Політ</td>
                <td>
                  {' '}
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  {' '}
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
              </tr>
              <tr className="row-1">
                <td>Скриня Енду</td>
                <td>
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
              </tr>
              <tr className="row-2">
                <td>Заряд полум'я</td>
                <td>
                  {' '}
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  {' '}
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
              </tr>
              <tr className="row-1">
                <td>Вхід поза без черги</td>
                <td>
                  {' '}
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  {' '}
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
              </tr>
              <tr className="row-2">
                <td>Повернення на місце смерті</td>
                <td>
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  {' '}
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  {' '}
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
              </tr>
              <tr className="row-1">
                <td>Ремонт</td>
                <td>
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
              </tr>
              <tr className="row-2">
                <td>Зміна погоди</td>
                <td>
                  {' '}
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  {' '}
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  {' '}
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
              </tr>
              <tr className="row-1">
                <td>Режим безсмертя</td>
                <td>
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  {' '}
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
              </tr>
              <tr className="row-2">
                <td>Телепортація по кординатам</td>
                <td>
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  {' '}
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
              </tr>
              <tr className="row-1">
                <td>Візуальні ефекти</td>
                <td>
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  {' '}
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
              </tr>
              <tr className="row-2">
                <td>Елітра</td>
                <td>
                  {' '}
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  {' '}
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  {' '}
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
              </tr>
              <tr className="row-1">
                <td>Броня</td>
                <td>
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  {' '}
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  <img className="acces-img" src={okImg} alt="ok" />
                </td>
              </tr>
              <tr className="row-2">
                <td>/kit banners</td>
                <td>
                  {' '}
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>
                  {' '}
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>1 раз</td>
                <td>2 рази</td>
              </tr>
              <tr className="row-1">
                <td>/kit blocks</td>
                <td>
                  {' '}
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>1 раз</td>
                <td>2 раз</td>
                <td>6 раз</td>
              </tr>
              <tr className="row-2">
                <td>/kit books</td>
                <td>
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>1 раз</td>
                <td>2 раз</td>
                <td>6 раз</td>
              </tr>
              <tr className="row-1">
                <td>Прапорці привату</td>
                <td>
                  <img className="acces-img" src={notOkImg} alt="ok" />
                </td>
                <td>базові</td>
                <td>усі</td>
                <td>усі</td>
              </tr>
              <tr className="row-2">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="row-1">
                <td>Ціни:</td>
                <th>Селянин</th>
                <th>
                  <span className="kozak">Козак</span>
                </th>
                <th>
                  <span className="nationalist">Націоналіст</span>
                </th>
                <th>
                  <span className="getman">Гетьман</span>
                </th>
              </tr>
              <tr className="row-2">
                <td>1 місяць</td>
                <td>0</td>
                <td>39</td>
                <td>129</td>
                <td>279</td>
              </tr>
              <tr className="row-1">
                <td>
                  3 місяці <span className="sell"> -5%</span>
                </td>
                <td>0</td>
                <td>109</td>
                <td>359</td>
                <td>759</td>
              </tr>
              <tr className="row-2">
                <td>
                  6 місяців <span className="sell"> -10%</span>
                </td>
                <td>0</td>
                <td>209</td>
                <td>689</td>
                <td>1449</td>
              </tr>
              <tr className="row-1">
                <td>
                  12 місяців<span className="sell"> -15%</span>{' '}
                </td>
                <td>0</td>
                <td>389</td>
                <td>1299</td>
                <td>2699</td>
              </tr>
            </tbody>
          </table>

          <p className="premium-text-small">ПРИДБАТИ ДАНІ ПАКЕТИ МОЖНА НА СЕРВЕРІ ЗА ДОПОМОГОЮ КОМАНДИ /DONATE</p>
          <p className="premium-text-small">УСІ СУМИ СУМИ ВКАЗАНІ У ГРИВНЯХ</p>

          <Button str="ПОПОВНИТИ РАХУНОК" link="https://playcraft.com.ua/autodonate" />
        </div>
      </div>
    </section>
  )
}

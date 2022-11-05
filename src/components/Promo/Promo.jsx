import './Promo.scss'

import zsu from '../../assets/img/zsu.png'

export const Promo = () => {
  return (
    <div className="promo-container">
      <div className="promo-text-container">
        Відправляємо
        <div>
          на армію
          <span className="promo-procent"> 20%</span>
        </div>
      </div>
      <img alt="zsu-logo" className="promo-zsu" src={zsu}></img>
    </div>
  )
}

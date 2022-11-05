import { Button } from '../../components/Button/Button'
import './Start.scss'

export const Start = () => {
  return (
    <section>
      <div className="section-outer start">
        <div className="section-inner start-content">
          <h1 className="start-header">Для того щоб розпочати гру на сервері Вам необхідно:</h1>
          <div className="start-container">
            <div className="start-number-container number-1"></div>
            <div className="start-text">
              <div>Зареєструвати акаунт </div>
              <Button str="Реєстрація" link="https://login.playcraft.com.ua/" />
            </div>
          </div>
          <div className="start-separator"></div>
          <div className="start-container">
            <div className="start-text">
              Завантажити Java
              <Button str="Java" link="https://cdn.azul.com/zulu/bin/zulu17.28.13-ca-fx-jre17.0.0-win_x64.msi" />
            </div>

            <div className="start-number-container number-2"></div>
          </div>
          <div className="start-separator"></div>

          <div className="start-container">
            <div className="start-number-container number-3"></div>
            <div className="start-text">
              Завантажити Лаунчер
              <Button str="playcraft.exe" link="https://playcraft.com.ua/launchers/PlayCraft.exe" />
              <div className="about-abo">або</div>
              <Button str="playcraft.jar" link="https://playcraft.com.ua/launchers/PlayCraft.jar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

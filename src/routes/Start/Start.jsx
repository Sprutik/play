import { Button } from '../../components/Button/Button'
import './Start.scss'

export const Start = () => {
  return (
    <section>
      <div className="section-outer start">
        <div className="section-inner start-content">
          <h1 className="start-header">
            Для того щоб розпочати гру на сервері Вам необхідно:
          </h1>
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
              <Button
                str="Java"
                link="https://download.bell-sw.com/java/8u352+8/bellsoft-jre8u352+8-windows-amd64-full.msi"
              />
            </div>

            <div className="start-number-container number-2"></div>
          </div>
          <div className="start-separator"></div>

          <div className="start-container">
            <div className="start-number-container number-3"></div>
            <div className="start-text">
              Завантажити Лаунчер
              <Button
                str="Launcher.exe"
                link="https://launcher.playcraft.com.ua/PlayCraft.exe"
              />
              <div className="about-abo">або</div>
              <Button
                str="Launcher.jar"
                link="https://launcher.playcraft.com.ua/PlayCraft.jar"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

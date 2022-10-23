import './Privacy.scss'

export const Privacy = () => {
  return (
    <section>
      <div className="section-outer">
        <div className="section-inner">
          <div className="content privacy">
            <h2>Політика конфіденційності</h2>
            <h3>Персональні дані:</h3>
            <p>
              Під персональними данними мається на увазі:
              <ul>
                <li>адреса електронної пошти</li>
                <li>id акаунту у Facebook</li>
                <li>id акаунту у VK</li>
                <li>id акаунту у Telegram</li>
              </ul>
            </p>
            <p>
              PlayCraft залишає за собою право проводити інформаційні поштові
              розсилки.
              <br />
              Також PlayCraft може використовувати ваш IP адрес для збирання
              статистики активності на сайті за допомогою Google Analytics.
            </p>
            <p>
              Всі отримані данні зберігаються в захищенній базі данних.
              PlayCraft гарантує захист цих персональних даних від
              несанкціонованого використання.
            </p>

            <p>
              PlayCraft може передавати загальну статистику перегляду
              рекламодавцям, вказуючи лише кількість переглядів.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

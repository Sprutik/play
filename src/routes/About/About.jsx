import './About.scss'

export const About = () => {
  const admins = [
    { name: 'StIv33', desc: 'Owner, CEO & PM' },
    { name: 'AsmoOne', desc: 'Head Developer' },
    { name: 'Eric_Mensy', desc: 'System Administrator' },
    { name: 'MishaFromLviv', desc: 'Community Manager' },
    { name: 'Cool_boy', desc: 'Technical coordinator' },
    { name: 'Tuteshnij', desc: 'Senior Builder' },
    { name: 'Sprutik', desc: 'Site Developer' },
    { name: 'Cormick', desc: 'Builder' },
  ]

  const moders = [
    { name: 'Maksel', desc: '' },
    { name: 'Savage_Did', desc: '' },
    { name: 'Gmr', desc: '' },
  ]

  const helpers = [
    { name: 'TriXter', desc: '' },
    { name: 'Pain', desc: '' },
    { name: 'MalDeRoK', desc: '' },
    { name: 'artem123', desc: '' },
  ]

  const contributions = [
    { name: 'mik787', desc: '' },
    { name: 'pad0n', desc: '' },
    { name: 'Irokez', desc: '' },
    { name: 'yorri', desc: '' },
    { name: 'Drak0n4ik', desc: '' },
    { name: 'iKamikadze', desc: '' },
    { name: '_DimoN', desc: '' },
    { name: 'doctorjuta', desc: '' },
    { name: 'Semk0', desc: '' },
    { name: 'sparta', desc: '' },
    { name: 'Master21', desc: '' },
    { name: 'kuzia13666', desc: '' },
    { name: 'EmmRenn', desc: '' },
    { name: 'efidrin777', desc: '' },
  ]

  return (
    <section>
      <div className="section-outer about">
        <div className="section-inner about-content">
          <h2 className="about-label">ІСТОРІЯ:</h2>
          <p className="about-text">
            PlayCraft - перший український та Україномовний майнкрафт сервер.
            Сервер з теплою атмосферою, історія якого починається в далекому
            2012 році та триває досі. Засновниками серверу є pad0n, mik787,
            kuzia666 та, звісно, портал playua.net PlayCraft - це сервер з
            великою історією, він мав багато злетів та падінь, сварок та
            турнірів, живих зустрічей гравців та онлайн трансляцій. Проте він
            завжди залишатиметься ламповим, дружнім і щирим. Кожен його гравець
            творить історію тут і зараз. Долучайся і ти, будь частинкою цієї
            неперевершеної історії. PlayCraft - це твій майнкрафт сервер.
          </p>

          <div className="about-separator"></div>

          <h2 className="about-label">Адміністратори проєкту:</h2>
          <div className="admin-container">
            {admins.map((admin) => (
              <div key={admin.name} className="person-container">
                <div
                  className="person-head"
                  style={{
                    backgroundImage: `url(https://login.playcraft.com.ua/action.php?action=head&nick=${admin.name}&size=100)`,
                  }}
                ></div>
                <div className="person-desc-container">
                  <div className="person-description adim-name">
                    {admin.name}
                  </div>
                  <div className="person-description">{admin.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="about-separator"></div>

          <h2 className="about-label">Модератори:</h2>
          <div className="admin-container">
            {moders.map((admin) => (
              <div key={admin.name} className="person-container">
                <div
                  className="person-head"
                  style={{
                    backgroundImage: `url(https://login.playcraft.com.ua/action.php?action=head&nick=${admin.name}&size=100)`,
                  }}
                ></div>
                <div className="person-desc-container">
                  <div className="person-description moder-name">
                    {admin.name}
                  </div>
                  <div className="person-description">{admin.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="about-separator"></div>

          <h2 className="about-label">Хелпери:</h2>
          <div className="admin-container">
            {helpers.map((admin) => (
              <div key={admin.name} className="person-container">
                <div
                  className="person-head"
                  style={{
                    backgroundImage: `url(https://login.playcraft.com.ua/action.php?action=head&nick=${admin.name}&size=100)`,
                  }}
                ></div>
                <div className="person-desc-container">
                  <div className="person-description helper-name">
                    {admin.name}
                  </div>
                  <div className="person-description">{admin.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="about-separator"></div>

          <h2 className="about-label">Внесли вагомий внесок:</h2>
          <div className="admin-container">
            {contributions.map((admin) => (
              <div key={admin.name} className="person-container">
                <div
                  className="person-head"
                  style={{
                    backgroundImage: `url(https://login.playcraft.com.ua/action.php?action=head&nick=${admin.name}&size=100)`,
                  }}
                ></div>
                <div className="person-desc-container">
                  <div className="person-description contributor-name">
                    {admin.name}
                  </div>
                  <div className="person-description">{admin.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

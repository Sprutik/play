import './FAQ.scss'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

export const FAQ = () => {
  return (
    <section>
      <div className="section-outer">
        <div className="section-inner">
          <div className="faq content">
            <span className="section-header">Часті Запитання</span>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Лаунчер не відкривається
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    <b>Опис:</b> Лаунчер для свого запуску вимагає Java 8
                    бібліотекою JavaFX.
                    <br />
                    <b>Вирішення:</b> Завантажити необхідну Java можна{' '}
                    <a
                      href="https://download.bell-sw.com/java/8u352+8/bellsoft-jre8u352+8-windows-amd64-full.msi"
                      target="_blank"
                      rel="noreferrer"
                    >
                      тут
                    </a>
                    .<br />
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Безкінечна авторизація у лаунчері
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    <b>Опис:</b> Якщо після того, як Ви ввели логін та пароль,
                    натиснули кнопку "Вхід", та очікуєте більше ніж 5 хвилин, це
                    означає що стороння програма блокує зв'язок з нашим сервером
                    авторизації.
                    <br />
                    <b>Вирішення:</b> Необхідно вимкнути "Брадмауер Windows",
                    антивірус, або інші сторонні програми, які можуть блокувати
                    доступ до мережі (Hamachi).
                    <br />
                    <b>Примітка:</b> Windows 10 може блокувати авторизацію, якщо
                    стоять стандартні налаштування захисту системи.
                    <br />
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Як встановити свій пароль, або де його дізнатися?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Свій власний пароль встановити не можливо, це зроблено
                    заради захисту користувачів від взлому.
                    <br />
                    Отримати пароль можна в{' '}
                    <a
                      alt="login"
                      href="https://login.playcraft.com.ua/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      особистому кабінеті
                    </a>
                    , натиснувши на кнопку "Отримати пароль", далі необхідно
                    ввести його в лаунчері. Кожного разу пароль видається інший
                    <br />
                    <b>Примітка:</b> Пароль в лаунчері автоматично зберігається
                    і його непотрібно повторно вводити.
                    <br />
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Чому мене забанили і за що? Як розбанитись?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Адміністрація сервера банить гравців, які порушують{' '}
                    <a href="/rules" rel="noreferrer" target="_blank">
                      правила сервера
                    </a>
                    .<br />
                    За що вас забанили можна дізнатися у{' '}
                    <a
                      href="https://t.me/playcraftlogs"
                      rel="noreferrer"
                      target="_blank"
                    >
                      відповідній групі
                    </a>
                    .<br />
                    Щоб вас розбанили необхідно придбати відповідну послугу в
                    розділі{' '}
                    <a href="/donate" rel="noreferrer" target="_blank">
                      "Донат"
                    </a>
                    . Усі ваші речі та побудови при цьому зберігаються.{' '}
                    <i>Дотримуйтесь правил, щоб уникнути таких ситуацій!</i>
                    <br />
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Мою хатинку зламали, що мені робити?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    В першу чергу винні Ви, тому що свою території необхідно{' '}
                    <b>обов'язково приватити</b>. Запривачену територію ніхто не
                    може руйнувати, крім Вас.
                    <br />
                    Але все ж, якщо така ситуація склалася, Ви можете створити
                    пост в групі, вказавши координати та надавши скріншот
                    території. Після чого один з адміністраторів перевірить хто
                    вас погріферив, відновить тереторію, та покарає винного.
                    <br />
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    У мене все лагає, навіть важко мишку повертати! Що за лаги?!
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Проблема у вашому комп'ютері. А саме, у відеокарті.
                    <br />
                    Якщо у вас нормальний комп'ютер, але лагає, тоді проблема з
                    налаштуваннями. Дуже часто буває, що у вас є дві відеокарти,
                    одна інтегрована (вбудована в процеcсор), а інша дискретна
                    (зовнішня). Гра може запуститися не від дискретної
                    <br />
                    відеокарти, тоді у вас буде все лагати. Щоб це виправити
                    зайдіть в налаштування своєї відеокарти та встановіть, щоб
                    усі програми запускались лише від неї.
                    <br />
                    Також можна налаштувати саму гру, зменшити промальовку,
                    вимкнути ефекти, що підвищить fps.
                    <br />
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
            <span className="section-header">Корисні запитання:</span>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Як встановити свій власний скін?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Встановити скін можна в
                    <a
                      href="https://login.playcraft.com.ua/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      особистому кабінеті
                    </a>
                    . Для цього необхідно завантажити свій власний скін з
                    розширенням png.
                    <br />
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Що таке донат і навіщо він?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Донат - це додаткої послуги для полегшення, або покращення
                    ігрового процесу.
                    <br />
                    <b>Сервер повністю безкоштовний</b> , але за утримування
                    сервера, сайту, щоб адміністратори могли їсти "Мівіну" і не
                    вмерли з голоду, їм необхідно витрачати кошти. Купуючи
                    донат, ви підтримуєте сервер та полегшуєте цей процес, що
                    дасть змогу
                    <br />
                    більше часу працювати над сервером, покращувати його та
                    вдосконалювати. Без донату, сервер просто не зможе існувати,
                    так як це дуже великі витрати.
                    <br />
                    Реквізити, для тих хто хоче допомогти нашому проекту,
                    знаходяться в розділі{' '}
                    <a href="/donate" target="_blank">
                      "Донат"
                    </a>
                    .<br />
                    Якщо ви допомогли проєкту, знайте Ви - круті, дякуємо Вам!
                    <br />
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Чому деякі гравці літають і в них кольорові ніки?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Вони придбали донат послуги. Що це таке, можна прочитати
                    трішки вище :)
                    <br />
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Як встановити шейдери?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Щоб встановити шейдери, необхідно вибрати у лаунчері версію
                    PlayCraft та увійти на сервер.
                    <br />
                    Завантажте бажаний{' '}
                    <a
                      href="https://www.google.com/search?q=shaders%20pack%20minecraft"
                      rel="noreferrer"
                      target="_blank"
                    >
                      шейдерпак
                    </a>{' '}
                    та закиньте його в папку
                    (C:\Users\%Admin%\playcraft\updates\PlayCraft(версія)\shaderpacks).
                    <br />
                    Заходимо в налаштування - Options -> Video Settings ->
                    Preference... -> Fast Render ставимо на <b>OFF</b>.<br />
                    Після чого в грі натисніть{' '}
                    <b>Options -> Video Settings -> Shaders</b> та оберіть
                    завантажений шейдерпак.
                    <br />
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Як перевірити чия це територія і чи можу я тут будувати?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Для того, щоб перевірити чи можете ви тут будувати, можна
                    натиснути палицею по бажаному блоку правою кнопкою миші.
                    <br />
                    Для того, щоб перевірити чия це територія необхідно стати
                    всередині неї та ввести команду <b>/rg info.</b>
                    <br />
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Як часто роблять вайпи на сервері?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Вайп - це повне очищення ігрового світу.
                    <br />
                    Зазвичай вайп ми стараємося робити не частіше одного разу на
                    рік, так як ми цінуємо побудови інших гравців. Найчастіше
                    вайп роблять через два роки, після існування серверу, так як
                    територія засмічується та стає некомфортно грати. Вайпи
                    <br />
                    також необхідні для того, щоб перейти на нову версію гри,
                    так як в ній додаються нові блоки, або нова генерація світу.
                    <br />
                    Останій вайп був: 23.10.2022
                    <br />
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
            <span className="section-header">Цікаві запитання:</span>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Чи можна збивати спавнери кайлом на шовковий дотик?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    На версії 1.6 та 1.7, на сервері була можливість збивати
                    спавнери кайлом на шовковий дотик, але з версії 1.8 ми
                    прибрали цю можливість, тому що це сильно впливає на ігровий
                    процес та на роботу сервера в цілому.
                    <br />
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Я побудував собі хатинку, що мені далі робити?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Наш сервер, це в першу чергу взаємодія з іншими грацями.
                    Тому щоб Ви не нудьгували, знайдіть однодумців разом з якими
                    ви можете побудувати свою фортецю, з неймовірними
                    механізмами, які здивують усіх гравців. Можна збудувати свій
                    <br />
                    власний магазинчик, в якому продавати необхідні товари для
                    інших гравців. Або просто допомагати іншим гравцям у
                    втіленні їх ідей.
                    <br />
                    Також на нашому проєкті є сервери з різноманітними модами та
                    міні-іграми (Постійно розроблюються нові).
                    <br />
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Скільки коштує літр цвяхів, якщо козер дзвінка?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Мішок блокнотів.
                    <br />
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

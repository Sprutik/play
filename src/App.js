import { Helmet, HelmetProvider } from 'react-helmet-async'
import { HashRouter, Route, Routes } from 'react-router-dom'

import fivicon16 from './assets/img/favicon/favicon-16x16.png'
import fivicon32 from './assets/img/favicon/favicon-32x32.png'

import './App.scss'

import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Main } from './routes/Main/Main'
import { Rules } from './routes/Rules/Rules'
import { FAQ } from './routes/FAQ/FAQ'
import { Start } from './routes/Start/Start'
import { Commands } from './routes/Commands/Commands'
import { Donate } from './routes/Donate/Donate'
import { Premium } from './routes/Premium/Premium'
import { About } from './routes/About/About'
import { GDPR } from './routes/GDPR'
import { Privacy } from './routes/Privacy/Privacy'
import { Agreement } from './routes/Agreement/Agreement'
import { ErrorPage } from './routes/ErrorPage/ErrorPage'

const App = () => {
  return (
    <HashRouter>
      <div className="app">
        <HelmetProvider>
          <Helmet>
            <title>PlayCraft</title>
            <link rel="icon" type="image/png" href={fivicon16} sizes="16x16" />
            <link rel="icon" type="image/png" href={fivicon32} sizes="32x32" />
          </Helmet>
        </HelmetProvider>

        <Header />
        <div className="app-wrapper">
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/rules" element={<Rules />} />
            <Route exact path="/faq" element={<FAQ />} />
            <Route exact path="/start" element={<Start />} />
            <Route exact path="/commands" element={<Commands />} />
            <Route exact path="/donate" element={<Donate />} />
            <Route exact path="/premium" element={<Premium />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/gdpr" element={<GDPR />} />
            <Route exact path="/privacy" element={<Privacy />} />
            <Route exact path="/agreement" element={<Agreement />} />
            <Route exact path="/*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App

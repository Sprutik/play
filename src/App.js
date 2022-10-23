import { Helmet, HelmetProvider } from 'react-helmet-async'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
import { Agreement } from './routes/Agreement/Agreement'
import { Privacy } from './routes/Privacy/Privacy'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
    },
    {
      path: 'rules',
      element: <Rules />,
    },
    {
      path: 'faq',
      element: <FAQ />,
    },
    {
      path: 'start',
      element: <Start />,
    },
    {
      path: 'commands',
      element: <Commands />,
    },
    {
      path: 'donate',
      element: <Donate />,
    },
    {
      path: 'premium',
      element: <Premium />,
    },
    {
      path: 'about',
      element: <About />,
    },
    {
      path: 'privacy',
      element: <Privacy />,
    },
    {
      path: 'agreement',
      element: <Agreement />,
    },
  ])

  return (
    <div className="app">
      <HelmetProvider>
        <Helmet>
          <title>PlayCraft</title>
        </Helmet>
      </HelmetProvider>

      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App

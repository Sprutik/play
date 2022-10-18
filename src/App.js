import { Helmet, HelmetProvider } from 'react-helmet-async'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.scss'

import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Main } from './routes/Main/Main'
import { Rules } from './routes/Rules/Rules'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
    },
    {
      path: '/rules',
      element: <Rules />,
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

import { Helmet } from 'react-helmet'

function Head() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>PlayCraft</title>
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="../../assets/favicons/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="../../assets/favicons/favicon-32x32.png"
      />
    </Helmet>
  )
}

export default Head

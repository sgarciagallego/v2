import * as React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import '../styles/layout.css'

const NotFoundPage = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>uh oh... | Sergio</title>
        <link rel="icon" type="image/x-icon" href="/src/images/icon.png" />
      </Helmet>
      <h1>Uh oh...</h1>
      <p>Seems like we got lost, <Link to="/">return to safety</Link>!</p>
    </main>
  )
}

export default NotFoundPage
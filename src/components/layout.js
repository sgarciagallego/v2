import * as React from 'react'
import { Helmet } from 'react-helmet'
import '../styles/layout.css'

const Layout = ({children}) => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <link rel="icon" type="image/x-icon" href="./static/icon.svg" />
        <title>Sergio Garcia Gallego</title>
      </Helmet>
      {children}
    </>
  )
}

export default Layout
import * as React from 'react'
import { Helmet } from 'react-helmet'
import '../styles/layout.css'

const Layout = ({children}) => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Sergio Garcia Gallego</title>
      </Helmet>
      {children}
    </>
  )
}

export default Layout
import * as React from 'react'
import { Helmet } from 'react-helmet'
import '../styles/layout.css'

const Layout = ({children}) => {
  return (
    <>
      <Helmet
        htmlAttributes={{lang: 'en'}}>
        <meta charSet='utf-8' />
        <meta name='description' content='The second iteration of @sgarciagallego personal website, made with React, Gatsby and styled-components' />
        <title>Sergio Garcia Gallego</title>
        <link rel="canonical" href="https://sgarciagallego-v2.vercel.app" />
      </Helmet>
      {children}
    </>
  )
}

export default Layout
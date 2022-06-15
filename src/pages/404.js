import * as React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Error from "../components/error"

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not Found | Sergio</title>
      </Helmet>
      <Layout>
        <Navbar />
        <Error />
      </Layout>
    </>
  )
}

export default NotFoundPage
import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Error from "../components/Error"

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
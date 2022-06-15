import * as React from 'react'
import Layout from '../components/layout'
import Social from '../components/social'
import Email from '../components/email'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import About from '../components/about'
import Experience from '../components/experience'

const IndexPage = () => {
  return (
    <Layout>
      <Social />
      <Email />
      <Navbar />
      <Hero />
      <About />
      <Experience />
    </Layout>
  )
}

export default IndexPage

import * as React from 'react'
import Layout from '../components/Layout'
import Social from '../components/Social'
import Email from '../components/Email'
import Navbar from '../components/Navbar'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Experience from '../components/sections/Experience'
import Work from '../components/sections/Work'

const IndexPage = () => {
  return (
    <Layout>
      <Social />
      <Email />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Work />
    </Layout>
  )
}

export default IndexPage

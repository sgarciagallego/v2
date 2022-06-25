import * as React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Social from '../components/Social'
import Email from '../components/Email'
import Navbar from '../components/Navbar'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Experience from '../components/sections/Experience'
import Work from '../components/sections/Work'
import Contact from '../components/sections/Contact'
import Footer from '../components/Footer'

const IndexPage = () => {
  return (
    <Layout>
      <Seo 
        title='Sergio Garcia Gallego'
        description="The second iteration of @sgarciagallego's personal website, made with React, Gatsby and styled-components"
        image='/static/og.png'
        pathname='/'
      />
      <Social />
      <Email />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default IndexPage

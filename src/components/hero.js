import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { Link } from 'gatsby'

const mainStyles = {
  height: '100vh',
  padding: '80px 10%',
}

const supportTextStyles = {
  color: 'rgba(115, 115, 115, 1)',
  marginTop: '12%',
  fontFamily: '"Roboto Mono", monospace'
}

const headingStyles = {
  color: 'rgba(255, 255, 255, 1)',
  marginTop: '15px',
  fontSize: '5rem'
}

const subheadingStyles = {
  color: 'rgba(175, 175, 175, 1)',
  marginTop: '5px',
  fontSize: '4.2rem'
}

const paragraphStyles = {
  color: 'rgba(115, 115, 115, 1)',
  width: '50%',
  marginTop: '35px',
}

const Hero = () => {
  return (
    <main style={mainStyles}>
      <div 
        role='doc-subtitle'
        style={supportTextStyles}
      >
        Hi, my name is
      </div>
      <h1 style={headingStyles}>
        Sergio Garcia Gallego.
      </h1>
      <h2 style={subheadingStyles}>
        I build the future of the web.
      </h2>
      <p style={paragraphStyles}>
        I am an 18 year old Frontend Developer with 2 years' professional experience at <AnchorLink to='/#experience'>two startups</AnchorLink>! I am currently focused on building user-friendly, reusable & dynamic experiences with <Link to='https://purplebeard.co.uk'>Purple Beard</Link>.
      </p>
    </main>
  )
}

export default Hero
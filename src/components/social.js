import React from 'react'
import { Link } from 'gatsby'
import '../styles/layout.css'
import IconGithub from './icons/github'
import IconLinkedin from './icons/linkedin'
import IconInstagram from './icons/instagram'

const containerStyles = {
  position: 'fixed',
  bottom: 0,
  left: '25px',
  display: 'flex',
  flexDirection: 'column'
}

const iconStyles = {
  marginTop: '25px'
}

const Social = () => {
  return (
    <div style={containerStyles} className='social'>
      <Link to='/' style={iconStyles}>
        <IconGithub />
      </Link>
      <Link to='/' style={iconStyles}>
        <IconLinkedin />
      </Link>
      <Link to='/' style={iconStyles}>
        <IconInstagram />
      </Link>
    </div>
  )
}

export default Social
import React from 'react'
import { Link } from 'gatsby'
import '../styles/layout.css'

const containerStyles = {
  width: 'fit-content',
  position: 'fixed',
  bottom: 0,
  right: '25px',
  display: 'flex',
  flexDirection: 'column',
  transform: 'translate(100px)'
}

const emailStyles = {
  color: 'rgba(175, 175, 175, 1)',
  transform: 'rotate(90deg) translate(-125px)',
  fontFamily: '"Roboto Mono", monospace',
  fontSize: '0.8rem'
}

const Email = () => {
  return (
    <div style={containerStyles} className='email'>
      <Link to='mailto:gallegogarciasergio@gmail.com' style={emailStyles}>
        gallegogarciasergio@gmail.com
      </Link>
    </div>
  )
}

export default Email
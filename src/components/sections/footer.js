import React from 'react'
import IconGithub from '../icons/github'
import IconInstagram from '../icons/instagram'
import IconLinkedin from '../icons/linkedin'
import {
  footerContainer,
  footerSocial
} from '../modules/layout.module.css'

const Footer = () => {
  return (
    <footer className={footerContainer}>
      <div className={footerSocial}>
        <IconGithub />
        <IconInstagram />
        <IconLinkedin />
      </div>  
    </footer>
  )
}

export default Footer
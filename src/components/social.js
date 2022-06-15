import React from 'react'
import { Link } from 'gatsby'
import {
  socialContainer,
  iconStyles
} from './modules/layout.module.css'
import IconGithub from './icons/github'
import IconLinkedin from './icons/linkedin'
import IconInstagram from './icons/instagram'

const Social = () => {
  return (
    <div className={socialContainer}>
      <Link to='/' className={iconStyles}>
        <IconGithub />
      </Link>
      <Link to='/' className={iconStyles}>
        <IconLinkedin />
      </Link>
      <Link to='/' className={iconStyles}>
        <IconInstagram />
      </Link>
    </div>
  )
}

export default Social
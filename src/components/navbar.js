import * as React from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import {
  logo,
  headerStyles,
  navStyles,
  navListStyles,
  linkStyles,
  linkNoStyles,
  btn
} from './modules/navbar.module.css'
import Logo from './icons/logo'

const Navbar = () => {
  return (
    <header className={headerStyles}>
      <div><Link to='/'><Logo className={logo} /></Link></div>
      <nav>
        <ul className={navStyles}>
          <li className={navListStyles}>
            <AnchorLink to='/#about'>
              <span className={linkNoStyles}>01.</span>
              <span className={linkStyles}>About</span>
            </AnchorLink>
          </li>
          <li className={navListStyles}>
            <AnchorLink to='/#experience'>
              <span className={linkNoStyles}>02.</span>
              <span className={linkStyles}>Experience</span>
            </AnchorLink>
          </li>
          <li className={navListStyles}>
            <AnchorLink to='/#work'>
              <span className={linkNoStyles}>03.</span>
              <span className={linkStyles}>Work</span>
            </AnchorLink>
          </li>
          <li className={navListStyles}>
            <AnchorLink to='/#contact'>
              <span className={linkNoStyles}>04.</span>
              <span className={linkStyles}>Contact</span>
            </AnchorLink>
          </li>
          <li className={navListStyles}>
            <Link to='/' className={btn}>
              <span>Resume</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
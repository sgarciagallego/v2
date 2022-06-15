import * as React from 'react'
import { Link } from 'gatsby'
import {
  logo,
  headerStyles,
  navStyles,
  navListStyles,
  linkStyles,
  linkNoStyles,
  btn
} from './modules/layout.module.css'
import Logo from './icons/logo'

const Navbar = () => {
  return (
    <header className={headerStyles}>
      <div><Link to='/'><Logo className={logo} /></Link></div>
      <nav>
        <ul className={navStyles}>
          <li className={navListStyles}>
            <Link 
              to='/#about'
              title='About Me'>
              <span className={linkNoStyles}>01.</span>
              <span className={linkStyles}>About</span>
            </Link>
          </li>
          <li className={navListStyles}>
            <Link to='/#experience'>
              <span className={linkNoStyles}>02.</span>
              <span className={linkStyles}>Experience</span>
            </Link>
          </li>
          <li className={navListStyles}>
            <Link to='/#work'>
              <span className={linkNoStyles}>03.</span>
              <span className={linkStyles}>Work</span>
            </Link>
          </li>
          <li className={navListStyles}>
            <Link to='/#contact'>
              <span className={linkNoStyles}>04.</span>
              <span className={linkStyles}>Contact</span>
            </Link>
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
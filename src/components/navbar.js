import * as React from 'react'
import { Link } from 'gatsby'
import {
  headerContainer,
  navContainer,
  navMenu,
  navItem,
  itemNo,
  btn,
  hamburger,
  bar
} from './modules/layout.module.css'
import Logo from './icons/logo'

const Navbar = () => {
  return (
    <header className={headerContainer}>
      <nav className={navContainer}>
        <Link to='/'><Logo /></Link>
        <ul className={navMenu}>
          <li className={navItem}>
            <Link to='/#about'>
              <span className={itemNo}>01.</span>
              <span>About</span>
            </Link>
          </li>
          <li className={navItem}>
            <Link to='/#experience'>
              <span className={itemNo}>02.</span>
              <span>Experience</span>
            </Link>
          </li>
          <li className={navItem}>
            <Link to='/#work'>
              <span className={itemNo}>03.</span>
              <span>Work</span>
            </Link>
          </li>
          <li className={navItem}>
            <Link to='/#contact'>
              <span className={itemNo}>04.</span>
              <span>Contact</span>
            </Link>
          </li>
          <li className={navItem}>
            <Link to='/' className={btn}>
              Resume
            </Link>
          </li>
        </ul>
        <div className={hamburger}>
          <span className={bar}></span>
          <span className={bar}></span>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
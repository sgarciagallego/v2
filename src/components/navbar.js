import * as React from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import Logo from './icons/logo'

const headerStyles = {
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  backdropFilter: 'blur(30px)',
  top: 0,
  width: '100vw',
  height: '80px',
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '15px 25px',
  borderBottom: '1px solid rgba(75, 75, 75, 1)',
}

const navStyles = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  listStyle: 'none',
  fontFamily: '"Roboto Mono", monosapce',
  fontSize: '0.8rem'
}

const navListStyles = {
  marginLeft: '15px',
}

const linkNoStyles = {
  color: 'rgba(75, 75, 75, 1)'
}

const linkStyles = {
  color: 'rgba(175, 175, 175, '
}

const Navbar = () => {
  return (
    <header style={headerStyles}>
      <div><Link to='/'><Logo id='logo' /></Link></div>
      <nav>
        <ul style={navStyles}>
          <li style={navListStyles}>
            <AnchorLink to='/#about'>
              <span style={linkNoStyles}>01.</span>
              <span style={linkStyles}>About</span>
            </AnchorLink>
          </li>
          <li style={navListStyles}>
            <AnchorLink to='/#experience'>
              <span style={linkNoStyles}>02.</span>
              <span style={linkStyles}>Experience</span>
            </AnchorLink>
          </li>
          <li style={navListStyles}>
            <AnchorLink to='/#work'>
              <span style={linkNoStyles}>03.</span>
              <span style={linkStyles}>Work</span>
            </AnchorLink>
          </li>
          <li style={navListStyles}>
            <AnchorLink to='/#contact'>
              <span style={linkNoStyles}>04.</span>
              <span style={linkStyles}>Contact</span>
            </AnchorLink>
          </li>
          <li style={navListStyles}>
            <Link to='/' id='btn'>
              <span>Resume</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
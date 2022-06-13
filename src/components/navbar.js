import * as React from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const Navbar = () => {
  return (
    <header>
      <div><Link to='/'>Sergio</Link></div>
      <nav>
        <ul>
          <li>
            <AnchorLink to='/#about'>
              <span>01.</span>
              <span>About</span>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to='/#experience'>
              <span>02.</span>
              <span>Experience</span>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to='/#work'>
              <span>03.</span>
              <span>Work</span>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to='/#contact'>
              <span>04.</span>
              <span>Contact</span>
            </AnchorLink>
          </li>
          <li>
            <Link to='/'>
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
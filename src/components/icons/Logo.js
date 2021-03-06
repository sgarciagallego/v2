import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const LogoWrap = styled.div`
  z-index: 9999;
  margin-top: 3px;
`

const Logo = () => {
  return (
    <LogoWrap as={Link} to='/'>
      <svg 
        width="37" 
        height="48" 
        viewBox="0 0 298 384" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M241.57 231.687C264.136 242.615 264.136 274.761 241.57 285.689L117.407 345.813C97.4846 355.46 74.3323 340.948 74.3323 318.812L74.3323 198.564C74.3323 176.429 97.4846 161.916 117.407 171.563L241.57 231.687Z" 
          fill="white"  
        />
        <path 
          d="M93.7598 134.984C71.1929 124.056 71.1929 91.91 93.7598 80.9823L217.922 20.8584C237.845 11.2112 260.997 25.7239 260.997 47.8593V168.107C260.997 190.243 237.845 204.755 217.922 195.108L93.7598 134.984Z" 
          fill="white"
        />
      </svg>
    </LogoWrap>
  )
}

export default Logo
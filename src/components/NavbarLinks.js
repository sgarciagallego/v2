import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  color: rgba(135, 135, 135, 1);
  display: inline-block;
  position: relative;
  font-family: 'Roboto Mono', sans-serif;
  font-size: 0.8rem;
  text-decoration: none;
  white-space: nowrap;
  margin: 0 12px;
  padding: 2px 0;
  transition: all 0.2s ease-in;

  :after {
    color: transparent;
    background: rgba(255, 255, 255, 1);
    width: 0%;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    content: ".";
    transition: all 0.2s ease-in;
  }

  :hover {
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 15px;
    padding-bottom: 5px;
    font-size: 0.8rem;
    z-index: 6;
  }
`

const PageName = styled.span`
  color: rgba(255, 255, 255, 1);
`

const NavItemBoxed = styled(Link)`
  color: rgba(255, 255, 255, 1);
  width: fit-content;
  padding: 14px 15px;
  border: 1px solid rgba(135, 135, 135, 1);
  border-radius: 10px;
  transition: 0.2s ease;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.8rem;

  :hover {
    border: 1px solid rgba(255, 255, 255, 1);
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/#about">
        <span>01.</span>
        <PageName>About</PageName>
      </NavItem>
      <NavItem to="/#experience">
        <span>02.</span>
        <PageName>Experience</PageName>
      </NavItem>
      <NavItem to="/#work">
        <span>03.</span>
        <PageName>Work</PageName>
      </NavItem>
      <NavItem to="/#contact">
        <span>04.</span>
        <PageName>Contact</PageName>
      </NavItem>
      <NavItemBoxed to="/">
        Resume
      </NavItemBoxed>
    </>
  )
}

export default NavbarLinks
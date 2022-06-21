import React, { useState } from "react"
import styled from "styled-components"
import NavbarLinks from "./NavbarLinks"
import Logo from "./icons/Logo"

const Navigation = styled.nav`
  z-index: 9999;
  position: fixed;
  top: 0;
  max-width: 100vw;
  height: 10vh;
  display: flex;
  background-color: rgba(0, 0, 0, 1);
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(75, 75, 75, 1);
  margin: 0 auto;
  padding: 0 1vw;
  align-self: center;
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`
const Toggle = styled.div`
  z-index: 9999;
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 2vw;
  @media (max-width: 768px) {
    display: flex;
  }
`
const Navbox = styled.div`
  width: 100vw;
  height: 225px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    transform: translateX(-1vw);
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    -moz-backdrop-filter: blur(30px);
    transition: all 0.2s ease-in;
    top: ${props => (props.open ? "-100%" : "8vh")};
    border-bottom: 1px solid rgba(75, 75, 75, 1);
  }
`

const Hamburger = styled.div`
  background-color: rgba(255, 255, 255, 1);
  width: 30px;
  height: 1px;
  transition: all 0.1s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 1px;
    background-color: rgba(255, 255, 255, 1);
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-8px, 0px)" : "rotate(0deg)"};
    top: -8px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 8px;
  }
`

const Navbar = () => {
  const [NavbarOpen, SetNavbarOpen] = useState(false)

  return (
    <Navigation>
      <Logo />
      <Toggle
        navbarOpen={NavbarOpen}
        onClick={() => SetNavbarOpen(!NavbarOpen)}
      >
        {NavbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {NavbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar
import * as React from "react"
import styled from "styled-components"
import NavbarLinks from "./NavbarLinks"
import Logo from "./icons/Logo"

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 10vh;
  display: flex;
  background-color: rgba(0, 0, 0, 1);
  justify-content: space-between;
  border-bottom: 1px solid rgba(75, 75, 75, 1);
  margin: 0 auto;
  padding: 0 2vw;
  z-index: 2;
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
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 2vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    -moz-backdrop-filter: blur(30px);
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
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
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const Navbar = () => {
  const [NavbarOpen, SetNavbarOpen] = React.useState(false)

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
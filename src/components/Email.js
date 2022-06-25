import React from 'react'
import styled from 'styled-components'

const StyledEmailContainer = styled.div`
  width: fit-content;
  position: fixed;
  bottom: 0;
  right: 25px;
  display: flex;
  flex-direction: column;
  transform: translate(100px);

  ::after {
    content: "";
    width: 1px;
    height: 65px;
    margin: 10px auto 0 auto;
    background-color: rgba(75, 75, 75, 1);
  }

  a {
    color: rgba(175, 175, 175, 1);
    transform: rotate(90deg) translate(-125px);
    font-family: 'Roboto Mono', monospace;
    font-size: 0.8rem;
    transition: all 0.2s ease-in;

    :hover {
      transform: rotate(90deg) translate(-130px);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const Email = () => {
  return (
    <StyledEmailContainer>
      <a href='mailto:gallegogarciasergio@gmail.com'>
        gallegogarciasergio@gmail.com
      </a>
    </StyledEmailContainer>
  )
}

export default Email
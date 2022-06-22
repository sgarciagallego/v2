import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
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
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const Email = () => {
  return (
    <Container>
      <a href='mailto:gallegogarciasergio@gmail.com'>
        gallegogarciasergio@gmail.com
      </a>
    </Container>
  )
}

export default Email
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 10%;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  
  @media (max-width: 480px) {
    padding: 8vh 10vw;
  }
`
const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`
const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-size: 2rem;

  @media (max-width: 480px) {
    font-size: 1.7rem;
    margin-bottom: 10px;
  }
`
const Btn = styled(Link)`
  display: block;
  width: fit-content;
  padding: 14px 15px;
  border: 1px solid rgba(75, 75, 75, 1);
  border-radius: 10px;
  transition: 0.2s ease;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.8rem;
  
  :hover {
    border: 1px solid rgba(175, 175, 175, 1)
  }
`

const Error = () => {
  return (
    <Container>
      <Center>
        <Title>Page Not Found</Title>
        <Btn to='/'>
          Return Home
        </Btn>
      </Center>
    </Container>
  )
}

export default Error
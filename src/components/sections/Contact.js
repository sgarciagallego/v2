import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  width: 100%;
  max-width: 1600px;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 10vh 8vw;
  scroll-snap-align: start;
  
  @media (max-width: 480px) {
    padding: 8vh 5vw;
    scroll-snap-align: none;
  }
`
const Support = styled.div`
  color: rgba(200, 200, 200, 1);
  font-family: 'Roboto Mono', monospace;
  margin-bottom: 10px;
`
const HeadingThree = styled.h3`
  color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 3.2rem;
  
  @media (max-width: 480px) {
    font-size: 2.2rem;
  } 
`
const Mono = styled.span`
  color: rgba(175, 175, 175, 1);
  font-family: 'Roboto Mono', monospace;
  font-size: 80%;
`
const ShortMessage = styled.p`
  color: rgba(115, 115, 115, 1);
  margin-top: 20px;
  font-size: 1.1rem;
  line-height: 25px;
  text-align: center;
  max-width: 500px;
  @media (max-width: 480px) {
    line-height: 20px;
    font-size: 0.9rem;
  }
`
const Btn = styled.a`
  display: block;
  width: fit-content;
  margin-top: 30px;
  padding: 14px 15px;
  border: 1px solid rgba(75, 75, 75, 1);
  border-radius: 10px;
  transition: 0.2s ease;
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  :hover {
    border: 1px solid rgba(175, 175, 175, 1)
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`

const Contact = () => {
  return (
    <Container id='contact'>
      <Support>What's Next?</Support>
      <HeadingThree>
        <Mono>04.</Mono>Contact
      </HeadingThree>
      <ShortMessage>
        At this moment in time, I am pleased with my current position at Purple Beard. However, my inbox is always open, so whether you have a question or you are just introducing yourself, I will get back to you!
      </ShortMessage>
      <Btn
        href='mailto:gallegogarciasergio@gmail.com'
      >
        Get In Touch!
      </Btn>
    </Container>
  )
}

export default Contact
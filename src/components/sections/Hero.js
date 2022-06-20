import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10vh 10vw;
  scroll-snap-align: start;
  
  @media (max-width: 480px) {
    padding: 8vh 5vw;
    scroll-snap-align: none;
  }
`
const TitleSupport = styled.div`
  color: rgba(115, 115, 115, 1);
  font-family: 'Roboto Mono', monospace;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    font-size: 0.8rem
  }
`
const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-size: 5rem;

  @media (max-width: 480px) {
    font-size: 2.7rem;
    margin-bottom: 10px;
  }
`
const HeadingTwo = styled.h2`
  color: rgba(175, 175, 175, 1);
  margin-top: 5px;
  font-size: 4.2rem;

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`
const ParagraphContainer = styled.p`
  color: rgba(115, 115, 115, 1);
  max-width: 750px;
  margin-top: 20px;
  line-height: 25px;

  @media (max-width: 480px) {
    margin-top: 25px;
    font-size: 0.8rem;
    line-height: 20px;
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
  font-size: 0.8rem;
  
  :hover {
    border: 1px solid rgba(175, 175, 175, 1)
  }
`

const Hero = () => {
  let timeOfDay
  const date = new Date()
  const hours = date.getHours()

  if (hours >= 1 && hours < 12) {
    timeOfDay = 'morning'
  } else if ( hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon'
  } else {
    timeOfDay = 'evening'
  }

  return (
    <Container id='home'>
      <TitleSupport role='doc-subtitle'>
        Good {timeOfDay}, my name is
      </TitleSupport>
      <Title>
        Sergio Garcia Gallego.
      </Title>
      <HeadingTwo>
        I build the web.
      </HeadingTwo>
      <ParagraphContainer>
        I am an 18 year old Frontend Developer with 2 years of professional experience at <Link to='/#experience'>two startups</Link>! I am currently building reusable, user-friendly experiences with <a href='https://purplebeard.co.uk' target='_blank' rel='noreferrer'>Purple Beard</a>.
      </ParagraphContainer>
      <Btn href='/'>
        Resume
      </Btn>
    </Container>
  )
}

export default Hero
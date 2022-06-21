import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 10vh 8vw;
  scroll-snap-align: start;
  
  @media (max-width: 480px) {
    padding: 8vh 5vw;
    scroll-snap-align: none;
  }
`
const HeadingThree = styled.h3`
  color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 2.5rem;
  
  @media (max-width: 480px) {
    font-size: 1.7rem;
  }
`
const Mono = styled.span`
  color: rgba(175, 175, 175, 1);
  font-family: 'Roboto Mono', monospace;
  font-size: 80%;
`
const Job = styled.div`
  color: rgba(115, 115, 115, 1);
  max-width: 750px;
  margin-top: 35px;
  
  @media (max-width: 480px) {
    margin-top: 20px;
  }
`
const HeadingFour = styled.h4`
  color: rgba(175, 175, 175, 1);
  align-items: center;
  gap: 6px;
  font-size: 1.7em;
  a { margin-left: 6px; }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    a {
      display: block;
      width: fit-content;
      margin-left: 0;
    }
  }
`
const PurpleBeard = styled.a`
  background-color: #63028F;
  background-image: linear-gradient(45deg, #63028F, #39CF4E);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
`
const Vasave = styled.a`
  background-color: #285DA2;
  background-image: linear-gradient(45deg, #285DA2, #767676);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
`
const Summary = styled.ul`
  list-style: square;
  margin-top: 15px;
  margin-left: 20px;
  line-height: 25px;
  li::marker {
    color: rgba(175, 175, 175, 1)
  }

  @media (max-width: 480px) {
    margin-top: 10px;
    font-size: 0.8rem;
    line-height: 20px;
  }
`

const Experience = () => {
  return (
    <Container id='experience'>
      <HeadingThree>
        <Mono>02.</Mono>Experience
      </HeadingThree>
      <Job>
        <HeadingFour>
          Frontend UX/UI Developer
          <PurpleBeard
            href='https://purplebeard.co.uk'
            target='_blank'
            rel='noreferrer'
          >
            @ Purple Beard
          </PurpleBeard> 
        </HeadingFour>
        <Summary>
          <li>Building the foundation of reusable, performant code written in React for the 2022  rebrand, specifically the company website.</li>
          <li>Designing efficient, user-friendly site wireframes and brand designs for B2C experiences.</li>
          <li>Ensuring student success as a teaching mentor for frontend development skills bootcamps.</li>
        </Summary>
      </Job>
      <Job>
        <HeadingFour>
          Apprentice Web Developer
          <Vasave
            href='https://purplebeard.co.uk'
            target='_blank'
            rel='noreferrer'
          >
            @ Vasave
          </Vasave>
        </HeadingFour>
        <Summary>
          <li>Led in the web development, design and content creation for all the company B2C ventures.</li>
          <li>Influenced in the normalisation of multi-team project management systems for improved focus on efficiency.</li>
          <li>Created a focus on reusability of development processes through continuous documentation updates.</li>
        </Summary>
      </Job>
    </Container>
  )
}

export default Experience
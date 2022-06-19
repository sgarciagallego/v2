import React from 'react'
import styled from 'styled-components'
import IconList from '../icons/List'

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 10%;
  scroll-snap-align: start;
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
const ParagraphContainer = styled.div`
  color: rgba(115, 115, 115, 1);
  max-width: 750px;
  margin-top: 35px;
  line-height: 25px;

  p {
    margin-bottom: 15px;
  }

  p:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
    font-size: 0.8rem;
    line-height: 20px;
  }
`
const TechStack = styled.ul`
  column-count: 2;
  column-gap: 0;

  li {
    display: flex;
    align-items: center;
    font-family: 'Roboto Mono', monospace;
    font-size: 0.9rem;
    ::marker { content: ""; }

    @media (max-width: 480px) {
      font-size: 0.75rem;
    }
  }
`

const About = () => {
  return (
    <Container id='about'>
      <HeadingThree>
        <Mono>01.</Mono>About Me
      </HeadingThree>
      <ParagraphContainer>
        <p>Ever since I first placed my hands on a battered Samsung computer running Fedora 18, I have not wanted to stop diving deeper into tech. The challenge and problems from having to using a terminal to install Minecraft at the age of 7 drove me to venture into this world. 😆</p>
        <p>Fast forward to mid 2022, and I have had the pleasure of working at a <a href='https://vasavebusiness.com' target='_blank' rel='noreferrer'>tech-software startup</a>, leading in the build and design of various client and company websites using HTML5, CSS3, JavaScript and jQuery. As well as this, I am currently working at a <a href='https://purplebeard.co.uk' target='_blank' rel='noreferrer'>digital skills bootcamp</a> as a student mentor for the Frontend Development Bootcamps and as a Junior Frontend Web Developer.</p>
        <p>Here are some of the technologies I use during my day-to-day activities.</p>
        <TechStack>
          <li><IconList />React</li>
          <li><IconList />JavaScript (ES6)</li>
          <li><IconList />Gatsby</li>
          <li><IconList />WordPress</li>
          <li><IconList />Figma</li>
          <li><IconList />Spline</li>
        </TechStack>
      </ParagraphContainer>
    </Container>
  )
}

export default About
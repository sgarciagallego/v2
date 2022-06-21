import React from 'react'
import styled from 'styled-components'
import IconFolder from '../icons/Folder'

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
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;

  @media (max-width: 480px) {
    justify-content: center;
  }
`
const Card = styled.a`
  width: 270px;
  height: 285px;
  border: 1px solid rgba(115, 115, 115, 1);
  border-radius: 10px;
  margin-bottom: 30px; 
  padding: 27px;
  transition: all 0.2s ease-in;
  :hover {
    transform: translateY(-5px);
  }
  @media (max-width: 480px) {
    width: 260px;
    height: 260px;
  }
`
const HeadingFour = styled.h4`
  margin-top: 10px;
  font-size: 1.6rem;
  color: rgba(255, 255, 255, 1);
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`
const ProjectSummary = styled.p`
  color: rgba(115, 115, 115, 1); 
  margin-top: 15px;
  line-height: 23px;
  @media (max-width: 480px) {
    font-size: 0.8rem;
    line-height: 20px;
  }
`
const TechUsed = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 25px;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.9rem;
  li {
    margin-right: 10px;
    :last-child {
      margin-right: 0;
    }
  }
`

const Work = () => {
  return (
    <Container id='work'>
      <HeadingThree>
        <Mono>03.</Mono>Personal Projects
      </HeadingThree>
      <CardWrapper>
        <Card 
          href='https://github.com/sgarciagallego/airbnb-clone'
          target='_blank'
          rel='noreferrer'
        >
          <IconFolder />
          <HeadingFour>Airbnb Clone</HeadingFour>
          <ProjectSummary>
            Utilising and becoming familiar with props, conditional rendering, and fetching data from JSON.
          </ProjectSummary>
          <TechUsed>
            <li>JS</li>
            <li>React</li>
            <li>JSON API</li>
          </TechUsed>
        </Card>
        <Card 
          href='https://github.com/sgarciagallego/meme-generator'
          target='_blank'
          rel='noreferrer'
        >
          <IconFolder />
          <HeadingFour>Meme Generator</HeadingFour>
          <ProjectSummary>Introduction to State, delving further into conditional rendering, and utilising the ImgFlip API.</ProjectSummary>
          <TechUsed>
            <li>JS</li>
            <li>React</li>
            <li>ImgFlip API</li>
          </TechUsed>
        </Card>
        <Card 
          href='https://github.com/sgarciagallego/travel-planner'
          target='_blank'
          rel='noreferrer'
        >
          <IconFolder />
          <HeadingFour>Travel Planner</HeadingFour>
          <ProjectSummary>
            Creating an itinerary for my visit to Greece in 2022, where I plan my trip along with some links.
          </ProjectSummary>
          <TechUsed>
            <li>JS</li>
            <li>React</li>
            <li>JSON API</li>
          </TechUsed>
        </Card>
        <Card 
          href='https://github.com/sgarciagallego/v1'
          target='_blank'
          rel='noreferrer'
        >
          <IconFolder />
          <HeadingFour>v1</HeadingFour>
          <ProjectSummary>
            The first iteration of my portfolio website created using HTML5, CSS3 and JavaScript.
          </ProjectSummary>
          <TechUsed>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JS</li>
          </TechUsed>
        </Card>
      </CardWrapper>
    </Container>
  )
}

export default Work
import React from 'react'
import styled from 'styled-components'
import IconList from '../icons/List'

const StyledAboutContainer = styled.section`
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
    scroll-snap-align: none
  }

  .section--title {
    color: rgba(255, 255, 255, 1);
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 2.5rem;

    @media (max-width: 480px) {
      font-size: 1.7rem;
    }
  }

  .section--number {
    color: rgba(175, 175, 175, 1);
    font-family: 'Roboto Mono', monospace;
    font-size: 80%;
  }

  .container--paragraph {
    color: rgba(115, 115, 115, 1);
    max-width: 750px;
    margin-top: 35px;
    line-height: 25px;

    @media (max-width: 480px) {
      margin-top: 20px;
      font-size: 0.8rem;
      line-height: 20px;
    }

    p {
      margin-bottom: 15px;

      :last-child {
        margin-bottom: 0;
      }
    }
  }

  .tech--list {
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
  }
`

const About = () => {
  return (
    <StyledAboutContainer id='about'>
      <h3 className='section--title'>
        <span className='section--number'>
          01.
        </span>
        About Me
      </h3>
      <div className='container--paragraph'>
        <p>
          Since I first placed my hands on my Dad's battered Samsung computer running Fedora 18, I have not wanted to stop diving deeper into tech. The challenge of using a terminal to install Minecraft at seven years of age drove me to venture into this world. 😆
        </p>
        <p>
          Fast forward to mid-2022, and I have had the pleasure of working at a&nbsp;
          <a 
            href='https://vasavebusiness.com'
            target='_blank'
            rel='noreferrer'
          >
            tech-software startup
          </a>
          , leading in the build and design of various client and company websites using HTML5, CSS3, JavaScript and jQuery. Additionally, I am currently working at a&nbsp;
          <a 
            href='https://purplebeard.co.uk'
            target='_blank'
            rel='noreferrer'
          >
            digital skills Bootcamp
          </a>
          &nbsp;as a student mentor for the Frontend Development Bootcamps and as a Junior Frontend Web Developer.
        </p>
        <p>
          Here are some of the technologies I use during my day-to-day activities.
        </p>
        <ul className='tech--list'>
          <li><IconList />React</li>
          <li><IconList />JavaScript (ES6)</li>
          <li><IconList />Gatsby</li>
          <li><IconList />WordPress</li>
          <li><IconList />Figma</li>
          <li><IconList />Spline</li>
        </ul>
      </div>
    </StyledAboutContainer>
  )
}

export default About
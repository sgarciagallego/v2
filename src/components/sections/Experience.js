import React from 'react'
import styled from 'styled-components'

const StyledExperienceContainer = styled.section`
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

  .container--job {
    color: rgba(115, 115, 115, 1);
    max-width: 750px;
    margin-top: 35px;
    
    @media (max-width: 480px) {
      margin-top: 20px;
    }
  }

  .job--title {
    color: rgba(175, 175, 175, 1);
    align-items: center;
    gap: 6px;
    font-size: 1.6em;
    a { margin-left: 6px; }

    @media (max-width: 480px) {
      font-size: 1.3rem;
      a {
        display: block;
        width: fit-content;
        margin-left: 0;
      }
    }
  }

  #pb--styles {
    background-color: #63028F;
    background-image: linear-gradient(45deg, #63028F, #39CF4E);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  }

  #vbs--styles {
    background-color: #285DA2;
    background-image: linear-gradient(45deg, #285DA2, #767676);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  }

  .job--description {
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
  }
`

const Experience = () => {
  return (
    <StyledExperienceContainer id='experience'>
      <h3 className='section--title'>
        <span className='section--number'>
          02.
        </span>
        Experience
      </h3>
      <div className='container--job'>
        <h4 className='job--title'>
          Frontend UX/UI Developer
          <a
            id='pb--styles'
            href='https://purplebeard.co.uk'
            target='_blank'
            rel='noreferrer'
          >
            @ Purple Beard
          </a> 
        </h4>
        <ul className='job--description'>
          <li>
            Building the foundation of reusable, performant code written in React for the 2022  rebrand, specifically the company website.
          </li>
          <li>
            Designing efficient, user-friendly site wireframes and brand designs for B2C experiences.
          </li>
          <li>

            Ensuring student success as a teaching mentor for frontend development skills bootcamps.
          </li>
        </ul>
      </div>
      <div className='container--job'>
        <h4 className='job--title'>
          Apprentice Web Developer
          <a
            id='vbs--styles'
            href='https://vasavebusiness.com'
            target='_blank'
            rel='noreferrer'
          >
            @ Vasave
          </a>
        </h4>
        <ul className='job--description'>
          <li>
            Led in the web development, design and content creation for all the company B2C ventures.
          </li>
          <li>
            Influenced in the normalisation of multi-team project management systems for improved focus on efficiency.
          </li>
          <li>
            Created a focus on reusability of development processes through continuous documentation updates.
          </li>
        </ul>
      </div>
    </StyledExperienceContainer>
  )
}

export default Experience
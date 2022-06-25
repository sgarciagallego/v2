import React from 'react'
import styled from 'styled-components'
import IconFolder from '../icons/Folder'

const StyledWorkContainer = styled.section`
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

  .container--card {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 30px;

    @media (max-width: 480px) {
      justify-content: center;
    }
  }

  .card--item {
    width: 270px;
    height: 285px;
    border: 1px solid rgba(75, 75, 75, 1);
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
  }

  .card--title {
    margin-top: 10px;
    font-size: 1.6rem;
    color: rgba(175, 175, 175, 1);

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }

  .card--description {
    color: rgba(115, 115, 115, 1); 
    margin-top: 15px;
    line-height: 23px;

    @media (max-width: 480px) {
      font-size: 0.8rem;
      line-height: 20px;
    }
  }

  .card--tech {
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
  }
`

const Work = () => {
  return (
    <StyledWorkContainer id='work'>
      <h3 className='section--title'>
        <span className='section--number'>
          03.
        </span>
        Personal Projects
      </h3>
      <div className='container--card'>
        <a
          className='card--item' 
          href='https://github.com/sgarciagallego/airbnb-clone'
          target='_blank'
          rel='noreferrer'
        >
          <IconFolder />
          <h4 className='card--title'>
            Airbnb Clone
          </h4>
          <p className='card--description'>
            Utilising and becoming familiar with props, conditional rendering, and fetching data from JSON.
          </p>
          <ul className='card--tech'>
            <li>JS</li>
            <li>React</li>
            <li>JSON API</li>
          </ul>
        </a>
        <a
          className='card--item' 
          href='https://github.com/sgarciagallego/meme-generator'
          target='_blank'
          rel='noreferrer'
        >
          <IconFolder />
          <h4 className='card--title'>
            Meme Generator
          </h4>
          <p className='card--description'>
            Introduction to State, delving further into conditional rendering, and utilising the ImgFlip API.
          </p>
          <ul className='card--tech'>
            <li>JS</li>
            <li>React</li>
            <li>ImgFlip API</li>
          </ul>
        </a>
        <a
          className='card--item' 
          href='https://github.com/sgarciagallego/travel-planner'
          target='_blank'
          rel='noreferrer'
        >
          <IconFolder />
          <h4 className='card--title'>
            Travel Planner
          </h4>
          <p className='card--description'>
            Creating an itinerary for my visit to Greece in 2022, where I plan my trip along with some links.
          </p>
          <ul className='card--tech'>
            <li>JS</li>
            <li>React</li>
            <li>JSON API</li>
          </ul>
        </a>
        <a
          className='card--item' 
          href='https://github.com/sgarciagallego/v1'
          target='_blank'
          rel='noreferrer'
        >
          <IconFolder />
          <h4 className='card--title'>
            v1
          </h4>
          <p className='card--description'>
            The first iteration of my portfolio website created using HTML5, CSS3 and JavaScript.
          </p>
          <ul className='card--tech'>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JS</li>
          </ul>
        </a>
      </div>
    </StyledWorkContainer>
  )
}

export default Work
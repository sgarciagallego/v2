import React from 'react'
import styled from 'styled-components'

const StyledContactContainer = styled.section`
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

  .title--support {
    color: rgba(200, 200, 200, 1);
    font-family: 'Roboto Mono', monospace;
    margin-bottom: 10px;
  }

  .section--title {
    color: rgba(255, 255, 255, 1);
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 3.2rem;
    
    @media (max-width: 480px) {
      font-size: 2.2rem;
    }
  }

  .section--number {
    color: rgba(175, 175, 175, 1);
    font-family: 'Roboto Mono', monospace;
    font-size: 80%;
  }

  .final--message {
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
  }

  .btn {
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
  }
`

const Contact = () => {
  return (
    <StyledContactContainer id='contact'>
      <div 
        className='title--support'
        role='doc-subtitle'
      >
        What's Next?
      </div>
      <h3 className='section--title'>
        <span className='section--number'>
          04.
        </span>
        Contact
      </h3>
      <p className='final--message'>
        My inbox is always open, so whether you have a question or you are just introducing yourself, I will try my best to get back to you!
      </p>
      <a
        className='btn'
        href='mailto:gallegogarciasergio@gmail.com'
      >
        Get In Touch!
      </a>
    </StyledContactContainer>
  )
}

export default Contact
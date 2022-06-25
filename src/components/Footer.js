import React from 'react'
import styled from 'styled-components'
import IconGithub from './icons/Github'
import IconLinkedin from './icons/Linkedin'
import IconInstagram from './icons/Instagram'

const StyledFooterContainer = styled.footer`
  width: 100%;
  max-width: 1600px;
  min-height: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0 auto;
  padding: 0 8vw;

  @media (max-width: 768px) {
    min-height: 10vh;
  }

  .section--social {
    display: none;
    gap: 15px;

    a {
      transition: all 0.2s ease-in;

      :hover {
        transform: translateY(-3px);
      } 
    }

    @media (max-width: 768px) {
      display: flex;
    }
  }

  .section--details {
    color: rgba(115, 115, 115, 1);
    display: flex;
    align-items: center;
    padding-bottom: 2vh;
    font-family: 'Roboto Mono', monospace;
    font-size: 0.9rem;
    line-height: 20px;

    a {
      margin-left: 5px;
    }

    @media (max-width: 480px) {
      line-heigth: 20px;
      display: block;
      text-align: center;
      font-size: 0.8rem;
    }
  }
`

const Footer = () => {
  return (
    <StyledFooterContainer>
      <div className='section--social'>
        <a
          href='https://github.com/sgarciagallego'
          target='_blank'
          rel='noreferrer'
        >
          <IconGithub />
        </a>
        <a
          href='https://linkedin.com/in/sgarciagallego'
          target='_blank'
          rel='noreferrer'
        >
          <IconLinkedin />
        </a>
        <a
          href='https://instagram.com/s_garciagallego'
          target='_blank'
          rel='noreferrer'
        >
          <IconInstagram />
        </a>
      </div>
      <div className='section--details'>
        © Build and Design by 
        <a 
          href='https://github.com/sgarciagallego'
          target='_blank'
          rel='noreferrer'
        >
          Sergio Garcia Gallego
        </a> 
      </div>
    </StyledFooterContainer>
  )
}

export default Footer
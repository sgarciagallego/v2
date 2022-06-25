import React from 'react'
import styled from 'styled-components'
import IconGithub from './icons/Github'
import IconLinkedin from './icons/Linkedin'
import IconInstagram from './icons/Instagram'

const StyledSocialContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 25px;
  display: flex;
  flex-direction: column;

  ::after {
    content: "";
    width: 1px;
    height: 60px;
    margin: 25px auto 0 auto;
    background-color: rgba(75, 75, 75, 1);
  }

  @media (max-width: 768px) {
    display: none
  }

  .social--icon {
    margin-top: 25px;
    transition: all 0.2s ease;

    :hover {
      transform: translateY(-3px);
    }
  }
`

const Social = () => {
  return (
    <StyledSocialContainer>
      <a
        className='social--icon'
        href='https://github.com/sgarciagallego'
        target='_blank'
        rel='noreferrer'
      >
        <IconGithub />
      </a>
      <a
        className='social--icon'
        href='https://linkedin.com/in/sgarciagallego'
        target='_blank'
        rel='noreferrer'
      >
        <IconLinkedin />
      </a>
      <a
        className='social--icon'
        href='https://instagram.com/s_garciagallego'
        target='_blank'
        rel='noreferrer'
      >
        <IconInstagram />
      </a>
    </StyledSocialContainer>
  )
}

export default Social
import React from 'react'
import styled from 'styled-components'
import IconGithub from './icons/github'
import IconLinkedin from './icons/linkedin'
import IconInstagram from './icons/instagram'

const Container = styled.div`
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

  @media (max-width: 480px) {
    display: none
  }
`
const Icon = styled.a`
  margin-top: 25px;
`

const Social = () => {
  return (
    <Container>
      <Icon
        href='https://github.com/sgarciagallego'
        target='_blank'
        rel='noreferrer'
      >
        <IconGithub />
      </Icon>
      <Icon
        href='https://linkedin.com/in/sgarciagallego'
        target='_blank'
        rel='noreferrer'
      >
        <IconLinkedin />
      </Icon>
      <Icon
        href='https://instagram.com/s_garciagallego'
        target='_blank'
        rel='noreferrer'
      >
        <IconInstagram />
      </Icon>
    </Container>
  )
}

export default Social
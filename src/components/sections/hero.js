import React from 'react'
import { Link } from 'gatsby'
import {
  sectionContainer,
  supportTextStyles,
  headingOneStyles,
  headingTwoStyles,
  paragraphStyles,
  btnContainer,
  btn
} from '../modules/layout.module.css'

const Hero = () => {
  let timeOfDay
  const date = new Date()
  const hours = date.getHours()

  if (hours >= 1 && hours < 12) {
    timeOfDay = 'morning'
  } else if ( hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon'
  } else {
    timeOfDay = 'night'
  }

  return (
    <main className={sectionContainer}>
      <div 
        role='doc-subtitle'
        className={supportTextStyles}
      >
        Good {timeOfDay}, my name is
      </div>
      <h1 className={headingOneStyles}>
        Sergio Garcia Gallego.
      </h1>
      <h2 className={headingTwoStyles}>
        I build the web.
      </h2>
      <p className={paragraphStyles}>
        I am an 18 year old Frontend Developer with 2 years' professional experience at <Link to='/#experience'>two startups</Link>! I am currently focused on building user-friendly, reusable & dynamic experiences with <a href='https://purplebeard.co.uk' target='_blank' rel='noreferrer'>Purple Beard</a>.
      </p>
      <div className={btnContainer}>
        <Link to='/' className={btn}>Resume</Link>
      </div>
    </main>
  )
}

export default Hero
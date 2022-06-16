import React from 'react'
import {
  sectionContainer,
  headingThreeStyles,
  monoStyles,
  paragraphStyles
} from '../modules/layout.module.css'

const Experience = () => {
  return (
    <section className={sectionContainer} id='experience'>
      <h3 className={headingThreeStyles}>
        <span className={monoStyles}>02.</span>
        <span>Experience</span>
      </h3>
    </section>
  )
}

export default Experience
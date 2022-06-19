import React from 'react'
import {
  sectionContainer,
  headingThreeStyles,
  monoStyles,
  jobContainer,
  headingFourStyles,
  pbStyles,
  vStyles,
  experienceList
} from '../modules/layout.module.css'

const Experience = () => {
  return (
    <section className={sectionContainer} id='experience'>
      <h3 className={headingThreeStyles}>
        <span className={monoStyles}>02.</span>
        <span>Experience</span>
      </h3>
      <div className={jobContainer}>
        <h4 className={headingFourStyles}>
          Frontend UX/UI Developer
          <a
            href='https://purplebeard.co.uk'
            target='_blank'
            rel='noreferrer'
            id={pbStyles}>
            @ Purple Beard
          </a> 
        </h4>
        <ul className={experienceList}>
          <li>Building the foundation of reusable, performant code written in React for the 2022  rebrand, specifically the company website.</li>
          <li>Designing efficient, user-friendly site wireframes and brand designs for B2C experiences.</li>
          <li>Ensuring student success as a teaching mentor for frontend development skills bootcamps.</li>
        </ul>
      </div>
      <div className={jobContainer}>
        <h4 className={headingFourStyles}>
          Apprentice Web Developer
          <a
            href='https://vasavebusiness.com'
            target='_blank'
            rel='noreferrer'
            id={vStyles}>
            @ Vasave
          </a>
        </h4>
        <ul className={experienceList}>
          <li>Led in the web development, design and content creation for all the company B2C ventures.</li>
          <li>Influenced in the normalisation of multi-team project management systems for improved focus on efficiency.</li>
          <li>Created a focus on reusability of development processes through continuous documentation updates.</li>
        </ul>
      </div>
    </section>
  )
}

export default Experience
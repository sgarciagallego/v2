import React from 'react'
import {
  sectionContainer,
  monoStyles,
  headingThreeStyles,
  paragraphStyles,
  listStyles
} from './modules/layout.module.css'
import IconList from './icons/list'

const About = () => {
  return (
    <section className={sectionContainer} id='about'>
      <h3 className={headingThreeStyles}>
        <span className={monoStyles}>
          01.
        </span>
        <span className={headingThreeStyles}>
          About Me
        </span>
      </h3>
      <div className={paragraphStyles}>
        <p>Ever since I first placed my hands on my dad's beat-up 2000's Samsung laptop running Linux (Fedora 18), I have not been able to stop discovering the world of tech. The challenge of using terminal to install Minecraft at the age of 7 drove me to venture into this world. 😆</p>
        <p>Fast forward to mid 2022, and I have had the pleasure of working at a <a href='https://vasavebusiness.com' target='_blank' rel='noreferrer'>tech-software startup</a>, leading in the build and design of various client and company websites using HTML5, CSS3, JavaScript and jQuery. As well as this, I am currently working at a <a href='https://purplebeard.co.uk' target='_blank' rel='noreferrer'>digital skills bootcamp</a> as a student mentor for the Frontend Development Bootcamps and as a Junior Frontend Web Developer.</p>
        <p>Here are some of the technologies I use during my day-to-day activities.</p>
        <ul className={listStyles}>
          <li><IconList />React</li>
          <li><IconList />JavaScript (ES6)</li>
          <li><IconList />Gatsby</li>
          <li><IconList />WordPress</li>
          <li><IconList />Figma</li>
          <li><IconList />Spline</li>
        </ul>
      </div>
    </section>
  )
}

export default About
import React from 'react'
import {
  emailContainer,
  emailStyles
} from './modules/layout.module.css'

const Email = () => {
  return (
    <div className={emailContainer}>
      <a href='mailto:gallegogarciasergio@gmail.com' className={emailStyles}>
        gallegogarciasergio@gmail.com
      </a>
    </div>
  )
}

export default Email
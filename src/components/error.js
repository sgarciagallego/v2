import React from 'react'
import { Link } from 'gatsby'
import {
  sectionContainer,
  centerContainer,
  btn
} from './modules/layout.module.css'

const Error = () => {
  return (
    <main className={sectionContainer}>
      <div className={centerContainer}>
        <h1>Page Not Found</h1>
        <Link to='/' className={btn}>
          Return Home
        </Link>
      </div>
    </main>
  )
}

export default Error
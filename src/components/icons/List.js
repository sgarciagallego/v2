import React from 'react'
import styled from 'styled-components'

const IconWrapper = styled.div`
  width: 14px;
  height: auto;
  display: flex;
  align-items: center;
  margin-right: 5px;
`

const IconList = () => {
  return (
    <IconWrapper>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24"
      >
        <path 
          fill="rgb(175, 175, 175)" 
          d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"
        />
      </svg>
    </IconWrapper>
  )
}

export default IconList
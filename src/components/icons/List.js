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
          d="M19.5,11.13,5.5,3.05a1,1,0,0,0-1,0,1,1,0,0,0-.5.87V20.08a1,1,0,0,0,.5.87,1,1,0,0,0,1,0l14-8.08a1,1,0,0,0,0-1.74ZM6,18.35V5.65L17,12Z"
        />
      </svg>
    </IconWrapper>
  )
}

export default IconList
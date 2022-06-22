import React from 'react'
import { UilFolder } from '@iconscout/react-unicons'
import styled from 'styled-components'

const FolderWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`

const IconFolder = () => {
  return (
    <FolderWrap>
      <UilFolder size='35' color='rgba(115, 115, 115, 1)' />
    </FolderWrap>
  )
}

export default IconFolder
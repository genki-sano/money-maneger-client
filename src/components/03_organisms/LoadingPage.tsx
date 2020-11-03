import React from 'react'
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress'

const Wrapper = styled.div`
  height: 10rem;
  width: 100%;
  text-align: center;
  display: table;
`
const Inner = styled.div`
  display: table-cell;
  vertical-align: middle;
`

const LoadingPage: React.FC = () => {
  return (
    <Wrapper>
      <Inner>
        <CircularProgress />
      </Inner>
    </Wrapper>
  )
}

export default LoadingPage

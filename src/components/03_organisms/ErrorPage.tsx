import React from 'react'
import styled from 'styled-components'
import Alert from '@material-ui/lab/Alert'
import { theme } from 'constants/globalUITheme'

const Wrapper = styled(Alert)`
  margin-top: ${`${theme.spacing(3)}px`};
`

interface Props {
  massage: string
}

const ErrorPage: React.FC<Props> = ({ massage }) => {
  return <Wrapper severity="error">{massage}</Wrapper>
}

export default ErrorPage

import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { numberWithDelimiter } from 'utils'
import theme from 'theme'

const Wrapper = styled(Grid)`
  padding: ${theme.spacing(3, 1)};
  text-align: center;
  color: ${theme.palette.primary.contrastText};
  background-color: ${theme.palette.primary.main};
`

const PriceText = styled(Typography)`
  display: inline-block;
  font-size: 1.8rem;
  font-weight: bold;
  margin-right: ${`${theme.spacing(1)}px`};
`

interface Props {
  loading: boolean
  women: number
  men: number
}

const TotalAmountTemplate: React.FC<Props> = ({ loading, women, men }) => {
  return (
    <>
      <Wrapper container>
        <Grid item xs={6}>
          <Typography>{process.env.REACT_APP_WOMEN_NAME}</Typography>
          <PriceText>{!loading ? numberWithDelimiter(women) : '-'}</PriceText>円
        </Grid>
        <Grid item xs={6}>
          <Typography>{process.env.REACT_APP_MEN_NAME}</Typography>
          <PriceText>{!loading ? numberWithDelimiter(men) : '-'}</PriceText>円
        </Grid>
      </Wrapper>
    </>
  )
}

export default TotalAmountTemplate

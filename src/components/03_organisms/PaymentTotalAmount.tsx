import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Total } from 'api/payment'
import { theme } from 'constants/globalUITheme'
import { numberWithDelimiter } from 'utils'

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

const womenName = process.env.REACT_APP_WOMEN_NAME || '花子'
const menName = process.env.REACT_APP_MEN_NAME || '太郎'

interface Props {
  loading: boolean
  total: Total
}

const TotalAmountTemplate: React.FC<Props> = ({ loading, total }) => {
  return (
    <>
      <Wrapper container>
        <Grid item xs={6}>
          <Typography>{womenName}</Typography>
          <PriceText>
            {loading ? '-' : numberWithDelimiter(total.women)}
          </PriceText>
          円
        </Grid>
        <Grid item xs={6}>
          <Typography>{menName}</Typography>
          <PriceText>
            {loading ? '-' : numberWithDelimiter(total.men)}
          </PriceText>
          円
        </Grid>
      </Wrapper>
    </>
  )
}

export default TotalAmountTemplate

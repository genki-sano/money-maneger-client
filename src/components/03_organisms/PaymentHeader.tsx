import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

const TitleText = styled(Typography)`
  flex-grow: 1;
`

interface Props {
  date: string
  setDate: (date: string) => void
}

const PaymentHeader: React.FC<Props> = ({ date, setDate }) => {
  const startDate = moment(date).startOf('month').format('YYYY/MM/DD')
  const endDate = moment(date).endOf('month').format('YYYY/MM/DD')

  const lastMonth = moment(date).subtract('month', 1).format('YYYY/MM/DD')
  const nextMonth = moment(date).add('month', 1).format('YYYY/MM/DD')

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          aria-label="last"
          color="inherit"
          onClick={() => {
            setDate(lastMonth)
          }}
        >
          <NavigateBeforeIcon />
        </IconButton>
        <TitleText
          noWrap
          align="center"
        >{`${startDate} - ${endDate}`}</TitleText>
        <IconButton
          aria-label="next"
          color="inherit"
          onClick={() => {
            setDate(nextMonth)
          }}
        >
          <NavigateNextIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default PaymentHeader

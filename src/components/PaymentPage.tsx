import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import PaymentTemplate from './PaymentTemplate'
import { selectList, fetchItems } from '../slices/listSlice'
import TotalAmountTemplate from './TotalAmountTemplate'
import theme from 'theme'

const Wrapper = styled(Container)`
  min-height: 100vh;
  padding: 0;
  background-color: ${theme.palette.background.paper};
`
const TitleText = styled(Typography)`
  flex-grow: 1;
  text-align: center;
`
const ListWrapper = styled(Container)`
  background-color: inherit;
`

const PaymentPage: React.FC = () => {
  const initialDate = moment().format('YYYY/MM/DD')
  const [date, setDate] = useState<string>(initialDate)

  const handleOnClick = (date: string): void => {
    setDate(date)
  }
  const dispatch = useDispatch()
  const { loading, error, items } = useSelector(selectList)

  useEffect(() => {
    dispatch(fetchItems(date))
  }, [dispatch, date])

  const startDate = moment(date).startOf('month').format('YYYY/MM/DD')
  const endDate = moment(date).endOf('month').format('YYYY/MM/DD')

  const lastMonth = moment(date).subtract('month', 1).format('YYYY/MM/DD')
  const nextMonth = moment(date).add('month', 1).format('YYYY/MM/DD')

  return (
    <Wrapper maxWidth="sm">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            aria-label="last"
            color="inherit"
            onClick={() => {
              handleOnClick(lastMonth)
            }}
          >
            <NavigateBeforeIcon />
          </IconButton>
          <TitleText noWrap>{`${startDate} - ${endDate}`}</TitleText>
          <IconButton
            aria-label="next"
            color="inherit"
            onClick={() => {
              handleOnClick(nextMonth)
            }}
          >
            <NavigateNextIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <TotalAmountTemplate
        loading={loading}
        women={items.total.women}
        men={items.total.men}
      />
      <ListWrapper maxWidth="sm">
        <PaymentTemplate loading={loading} error={error} items={items.items} />
      </ListWrapper>
    </Wrapper>
  )
}

export default PaymentPage

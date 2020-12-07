import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import PaymentTemplate from 'components/04_templates/PaymentTemplate'
import { selectPayments, fetchItems } from 'slices/payment'

const sessionDate = sessionStorage.getItem('money-maneger/date')
const initialDate = sessionDate || moment().format('YYYY/MM/DD')

const PaymentPage: React.FC = () => {
  const [date, setDate] = useState<string>(initialDate)

  const { loading, error, items, total } = useSelector(selectPayments)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchItems(date))
    sessionStorage.setItem('money-maneger/date', date)
  }, [dispatch, date])

  return (
    <PaymentTemplate
      loading={loading}
      error={error}
      total={total}
      items={items}
      date={date}
      setDate={setDate}
    />
  )
}

export default PaymentPage

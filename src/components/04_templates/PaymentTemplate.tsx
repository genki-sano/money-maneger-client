import React from 'react'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import { Total, Payment } from 'api/payment'
import PaymentHeader from 'components/03_organisms/PaymentHeader'
import PaymentListGroups from 'components/03_organisms/PaymentListGroups'
import PaymentTotalAmount from 'components/03_organisms/PaymentTotalAmount'
import { theme } from 'constants/globalUITheme'

const Wrapper = styled(Container)`
  min-height: 100vh;
  padding: 0;
  background-color: ${theme.palette.background.paper};
`
const ListWrapper = styled(Container)`
  background-color: inherit;
`

interface Props {
  loading: boolean
  error: string | null
  total: Total
  items: [string, Payment[]][]
  date: string
  setDate: (date: string) => void
}

const PaymentTemplate: React.FC<Props> = (props) => {
  const { loading, error, total, items, date, setDate } = props
  return (
    <Wrapper maxWidth="sm">
      <PaymentHeader date={date} setDate={setDate} />
      <PaymentTotalAmount loading={loading} total={total} />
      <ListWrapper maxWidth="sm">
        <PaymentListGroups loading={loading} error={error} items={items} />
      </ListWrapper>
    </Wrapper>
  )
}

export default PaymentTemplate

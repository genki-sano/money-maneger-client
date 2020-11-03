import React from 'react'
import styled from 'styled-components'
import List from '@material-ui/core/List'
import { Payment } from 'api/payment'
import ErrorPage from 'components/03_organisms/ErrorPage'
import LoadingPage from 'components/03_organisms/LoadingPage'
import PaymentList from 'components/03_organisms/PaymentList'

const Wrapper = styled(List)`
  background-color: inherit;
`
const ListSection = styled.li`
  background-color: inherit;
`

interface Props {
  loading: boolean
  error: string | null
  items: [string, Payment[]][]
}

const PaymentListGroups: React.FC<Props> = ({ loading, error, items }) => {
  if (loading) {
    return <LoadingPage />
  }
  if (error != null) {
    return <ErrorPage massage={error} />
  }

  return (
    <Wrapper>
      {items.map(([date, payments]: [string, Payment[]], index: number) => {
        return (
          <ListSection key={`section-${index}`}>
            <PaymentList date={date} payments={payments} />
          </ListSection>
        )
      })}
    </Wrapper>
  )
}

export default PaymentListGroups

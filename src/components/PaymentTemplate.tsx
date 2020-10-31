import React from 'react'
import styled from 'styled-components'
import List from '@material-ui/core/List'
import { PaymentListItem } from '../api/listApi'
import { ListErrorResponse } from '../slices/listSlice'
import LoadingPage from './LoadingPage'
import PaymentItems from './PaymentItems'

const Wrapper = styled(List)`
  background-color: inherit;
`
const ListSection = styled.li`
  background-color: inherit;
`

interface Props {
  loading: boolean
  error: ListErrorResponse | null
  items: [string, PaymentListItem[]][]
}

const PaymentListGroups: React.FC<Props> = ({ loading, error, items }) => {
  if (loading) {
    return <LoadingPage />
  }
  if (error) {
    return <p>{error}</p>
  }

  return (
    <Wrapper>
      {items.map(
        ([date, payments]: [string, PaymentListItem[]], index: number) => {
          return (
            <ListSection key={`section-${index}`}>
              <PaymentItems date={date} payments={payments} />
            </ListSection>
          )
        },
      )}
    </Wrapper>
  )
}

export default PaymentListGroups

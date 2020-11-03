import React from 'react'
import styled from 'styled-components'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import { Payment } from 'api/payment'
import CategoryAvator from 'components/02_molecules/CategoryAvator'
import { numberWithDelimiter } from 'utils'

const Wrapper = styled(List)`
  background-color: inherit;
`

interface Props {
  date: string
  payments: Payment[]
}

const PaymentList: React.FC<Props> = ({ date, payments }) => {
  return (
    <Wrapper subheader={<ListSubheader>{date}</ListSubheader>}>
      {payments.map((payment: Payment) => {
        return (
          <ListItem key={payment.id}>
            <ListItemAvatar>
              <CategoryAvator name={payment.name} category={payment.category} />
            </ListItemAvatar>
            <ListItemText secondary={payment.memo || 'その他'}>
              {payment.category}
            </ListItemText>
            <ListItemSecondaryAction>
              <ListItemText>
                {`${numberWithDelimiter(payment.price)} 円`}
              </ListItemText>
            </ListItemSecondaryAction>
          </ListItem>
        )
      })}
    </Wrapper>
  )
}

export default PaymentList

import React from 'react'
import styled from 'styled-components'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import { PaymentListItem } from '../api/listApi'
import CategoryAvator from './CategoryAvator'
import { numberWithDelimiter } from 'utils'

const Wrapper = styled(List)`
  background-color: inherit;
`

interface Props {
  date: string
  payments: PaymentListItem[]
}

const PaymentListItems: React.FC<Props> = ({ date, payments }) => {
  return (
    <Wrapper subheader={<ListSubheader>{date}</ListSubheader>}>
      {payments.map((item: PaymentListItem) => {
        return (
          <ListItem key={item.id}>
            <ListItemAvatar>
              <CategoryAvator name={item.name} category={item.category} />
            </ListItemAvatar>
            <ListItemText
              primary={item.category}
              secondary={item.memo || 'その他'}
            />
            <ListItemSecondaryAction>
              <ListItemText primary={`${numberWithDelimiter(item.price)} 円`} />
            </ListItemSecondaryAction>
          </ListItem>
        )
      })}
    </Wrapper>
  )
}

export default PaymentListItems

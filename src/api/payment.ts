import moment from 'moment'
import { groupBy } from 'utils'

export interface Payment {
  id: string
  name: string
  date: string
  price: number
  category: string
  memo: string
}

export interface Total {
  women: number
  men: number
}

export interface PaymentResponse {
  items: [string, Payment[]][]
  total: Total
}

export const fetchPayments = async (date: string): Promise<PaymentResponse> => {
  const params = {
    date: date,
  }
  const uri = process.env.REACT_APP_URI || 'http://localhost::8080'
  const queryParams = new URLSearchParams(params)
  const res = await fetch(`${uri}?${queryParams}`)
  const json = await res.json()
  if (!res.ok || json.message) {
    throw new Error(json.message)
  }
  return {
    items: groupBy(json.items, (cur: Payment) =>
      moment(cur.date).format('YYYY/MM/DD'),
    ),
    total: json.total,
  }
}

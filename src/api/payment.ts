import { AxiosPromise } from 'axios'
import moment from 'moment'
import axios from 'api/axios'

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
  items: Payment[]
  total: Total
}

export const getByDate = (date: string): AxiosPromise<PaymentResponse> => {
  const formatDate = moment(date).format('YYYYMMDD')
  return axios.get(`/api/payments/${formatDate}`)
}

interface Total {
  women: number
  men: number
}

export interface PaymentListItem {
  id: string
  name: string
  date: string
  price: number
  category: string
  memo: string
}

export interface PaymentList {
  items: [string, PaymentListItem[]][]
  total: Total
}

export const getPaymentList = async (date: string): Promise<PaymentList> => {
  const params = {
    uri: '/api/list',
    date: date,
  }
  const queryParams = new URLSearchParams(params)
  const uri = process.env.REACT_APP_URI || 'http://localhost::8080'
  const res = await fetch(`${uri}?${queryParams}`)
  const json = await res.json()
  if (!res.ok) {
    throw new Error(json.message)
  }
  return json
}

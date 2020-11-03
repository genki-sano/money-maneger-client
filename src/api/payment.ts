export interface Total {
  women: number
  men: number
}

export interface Payment {
  id: string
  name: string
  date: string
  price: number
  category: string
  memo: string
}

interface PaymentResponse {
  items: [string, Payment[]][]
  total: Total
}

export const fetchPayments = async (date: string): Promise<PaymentResponse> => {
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

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import moment from 'moment'
import { fetchPayments, Payment, Total, PaymentResponse } from 'api/payment'
import { RootState, AppDispatch } from 'stores'
import { groupBy } from 'utils'

interface PaymentState {
  loading: boolean
  error: string | null
  items: [string, Payment[]][]
  total: Total
}

const initialState: PaymentState = {
  loading: false,
  error: null,
  items: [],
  total: {
    women: 0,
    men: 0,
  },
}

export const paymentSlice = createSlice({
  name: 'payment',
  initialState: initialState,
  reducers: {
    fetchStart(state: PaymentState) {
      state.loading = true
      state.error = null
    },
    fetchFailure(state: PaymentState, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    },
    fetchSuccess(state: PaymentState, action: PayloadAction<PaymentResponse>) {
      state.loading = false
      state.error = null
      state.items = groupBy(action.payload.items, (cur: Payment) =>
        moment(cur.date).format('YYYY/MM/DD'),
      )
      state.total = {
        women: action.payload.total.women || 0,
        men: action.payload.total.men || 0,
      }
    },
  },
})

const { fetchStart, fetchFailure, fetchSuccess } = paymentSlice.actions

export const fetchItems = (date: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchStart())
    const res = await fetchPayments(date)
    dispatch(fetchSuccess(res.data))
  } catch (e) {
    const res = e.response
    const msg = `Error: ${res.data.message} ${res.status} (${res.statusText})`
    dispatch(fetchFailure(msg))
  }
}

export const selectPayments = (state: RootState) => state.payments

export const paymentReducer = paymentSlice.reducer

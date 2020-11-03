import { createSlice } from '@reduxjs/toolkit'
import { RootState, AppDispatch } from 'stores'
import { fetchPayments, Payment, Total } from 'api/payment'

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
    fetchStart(state) {
      state.loading = true
      state.error = null
    },
    fetchFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
    fetchSuccess(state, action) {
      state.loading = false
      state.error = null
      state.items = action.payload.items
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
    dispatch(fetchSuccess(await fetchPayments(date)))
  } catch (e) {
    dispatch(fetchFailure(e.stack))
  }
}

export const selectPayments = (state: RootState) => state.payments

export const paymentReducer = paymentSlice.reducer

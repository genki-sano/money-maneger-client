import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AxiosError, AxiosResponse } from 'axios'
import moment from 'moment'
import { getByDate, Payment, Total, PaymentResponse } from 'api/payment'
import { RootState, AppDispatch } from 'stores'
import { groupBy } from 'utils'

interface State {
  loading: boolean
  error: string | null
  items: [string, Payment[]][]
  total: Total
}

type ThunkArg = string
type ThunkApiConfig = {
  rejectValue: AxiosResponse<ErrorResponse>
}

interface ErrorResponse {
  message: string
}

const initialState: State = {
  loading: false,
  error: null,
  items: [],
  total: {
    women: 0,
    men: 0,
  },
}

const fetchPayments = createAsyncThunk<
  PaymentResponse,
  ThunkArg,
  ThunkApiConfig
>('payment/fetchPayments', async (date: ThunkArg, { rejectWithValue }) => {
  try {
    const res = await getByDate(date)
    return res.data
  } catch (err) {
    const e: AxiosError<ErrorResponse> = err
    if (!e.response) {
      throw err
    }
    return rejectWithValue(e.response)
  }
})

export const paymentSlice = createSlice({
  name: 'payment',
  initialState: initialState,
  reducers: {
    fetchStart(state: State) {
      state.loading = true
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPayments.fulfilled, (state: State, action) => {
      state.loading = false
      state.error = null
      state.items = groupBy(action.payload.items, (cur: Payment) =>
        moment(cur.date).format('YYYY/MM/DD'),
      )
      state.total = {
        women: action.payload.total.women || 0,
        men: action.payload.total.men || 0,
      }
    })
    builder.addCase(fetchPayments.rejected, (state: State, action) => {
      state.loading = false

      if (action.payload) {
        const msg = action.payload.data.message
        const code = action.payload.status
        const text = action.payload.statusText
        state.error = 'Error: ' + msg + ' (' + code + ' ' + text + ')'
      } else {
        const name = action.error.name || 'Error'
        const msg = action.error.message || 'Internal Server Error'
        state.error = name + ': ' + msg
      }
    })
  },
})

const { fetchStart } = paymentSlice.actions

export const fetchItems = (date: string) => async (dispatch: AppDispatch) => {
  dispatch(fetchStart())
  dispatch(fetchPayments(date))
}

export const selectPayments = (state: RootState) => state.payments

export const paymentReducer = paymentSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { getPaymentList, PaymentList } from '../api/listApi'

export interface ListErrorResponse {
  message: string
}

interface ListState {
  loading: boolean
  error: ListErrorResponse | null
  items: PaymentList
}

const initialState: ListState = {
  loading: false,
  error: null,
  items: {
    items: [],
    total: {
      women: 0,
      men: 0,
    },
  },
}

export const listSlice = createSlice({
  name: 'list',
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
      state.items = action.payload
    },
  },
})

export const { fetchStart, fetchFailure, fetchSuccess } = listSlice.actions

export const fetchItems = (date: string) => async (dispatch: any) => {
  try {
    dispatch(fetchStart())
    dispatch(fetchSuccess(await getPaymentList(date)))
  } catch (e) {
    dispatch(fetchFailure(e.stack))
  }
}

export const selectList = (state: RootState) => state.list

export default listSlice.reducer

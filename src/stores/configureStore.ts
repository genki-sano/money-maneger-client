import { configureStore } from '@reduxjs/toolkit'
import { paymentReducer } from 'slices/payment'

export const store = configureStore({
  reducer: {
    payments: paymentReducer,
  },
})

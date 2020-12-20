import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from 'react-redux'
import { ThunkAction, Action } from '@reduxjs/toolkit'
import { store } from 'stores/configureStore'

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector

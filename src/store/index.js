import { configureStore } from '@reduxjs/toolkit'
import NavMenuSlice from './reducers/NavMenuSlice'

export const store = configureStore({
  reducer: {
    navMenu: NavMenuSlice
  },
})
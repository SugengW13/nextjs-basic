import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  isLoading: boolean
  email: string
  password: string
  passwordConfirmation: string
  value: number
}

const initialState: UserState = {
  isLoading: false as boolean,
  email: '' as string,
  password: '' as string,
  passwordConfirmation: '' as string,
  value: 0 as number
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUp: (state) => {
      state.isLoading = !state.isLoading
    }
  }
})

export const {
  signUp
} = userSlice.actions
export default userSlice.reducer
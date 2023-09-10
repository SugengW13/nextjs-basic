import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {toast} from "react-toastify";

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

export const signUp = createAsyncThunk('user/signUp', async (payload: {
  email: string,
  password: string,
  passwordConfirmation: string
}) => {
  return await axios.post('/api/users', {
    email: payload.email,
    password: payload.passwordConfirmation,
    password_confirmation: payload.passwordConfirmation
  })
    .then((response: any) => {
      toast(response.message)
      return true })
    .catch((error) => {
      toast.error(error.message)
      return false
    })
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true
      })
      .addCase(signUp.fulfilled, (state) => {
        state.isLoading = false
      })
  }
})

export const { } = userSlice.actions
export default userSlice.reducer
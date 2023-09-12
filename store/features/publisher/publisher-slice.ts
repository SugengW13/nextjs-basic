import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import Publisher from "@/types/publisher";

interface PublisherState {
  isLoading: boolean
  items: Publisher[]
}

const initialState: PublisherState = {
  isLoading: false,
  items: []
}

export const getItems = createAsyncThunk('publisher/getItems', async () => {
  return await axios.get('/api/publishers')
    .then((response: any) => {
      return response
    })
    .catch((error: any) => {
      return false
    })
})

export const publisherSlice = createSlice({
  name: 'publisher',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getItems.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getItems.fulfilled, (state, action) => {
        state.items = action.payload?.data
        state.isLoading = false
      })
  }
})

export const {} = publisherSlice.actions
export default publisherSlice.reducer
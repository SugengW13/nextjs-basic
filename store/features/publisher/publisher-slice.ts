import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import Publisher from "@/types/publisher";

interface PublisherState {
  isLoading: boolean
  isLoadingForm: boolean
  items: Publisher[]
}

const initialState: PublisherState = {
  isLoading: false,
  isLoadingForm: false,
  items: []
}

export const getItems = createAsyncThunk('publisher/getItems', async (payload: {
  searchKey: string
}) => {
  return await axios.get('/api/publishers', {
    params: {
      search_key: payload.searchKey
    }
  }).then((response: any) => {
    return response
  }).catch((error: any) => {
    return false
  })
})

export const createItem = createAsyncThunk('publisher/createItem', async (payload: {
  name: string
}, { dispatch }) => {
  return await axios.post('/api/publishers', {
    name: payload.name
  }).then((response: any) => {
    dispatch(getItems({ searchKey: '' }))
    return true
  }).catch((error: any) => {
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
      .addCase(createItem.pending, (state) => {
        state.isLoadingForm = true
      })
      .addCase(createItem.fulfilled, (state) => {
        state.isLoadingForm = false
      })
  }
})

export const {} = publisherSlice.actions
export default publisherSlice.reducer
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

export const deleteItem = createAsyncThunk('publisher/deleteItem', async (payload: {
  id: string
}, { dispatch }) => {
  return await axios.delete(`/api/publishers/${payload.id}`)
    .then(() => {
      dispatch(getItems({ searchKey: '' }))
      return true
    })
    .catch((error: any) => {
      return false
    })
})

export const updateItem = createAsyncThunk('publisher/updateItem', async (payload: {
  id: string,
  name: string
}, { dispatch }) => {
  return await axios.put(`/api/publishers/${payload.id}`, {
    name: payload.name
  })
    .then(() => {
      dispatch(getItems({ searchKey: '' }))
      return true
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
      .addCase(createItem.pending, (state) => {
        state.isLoadingForm = true
      })
      .addCase(createItem.fulfilled, (state) => {
        state.isLoadingForm = false
      })
      .addCase(deleteItem.pending, (state) => {
        state.isLoadingForm = true
      })
      .addCase(deleteItem.fulfilled, (state) => {
        state.isLoadingForm = false
      })
      .addCase(updateItem.pending, (state) => {
        state.isLoadingForm = true
      })
      .addCase(updateItem.fulfilled, (state) => {
        state.isLoadingForm = false
      })
  }
})

export const {} = publisherSlice.actions
export default publisherSlice.reducer
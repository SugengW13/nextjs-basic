import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import Game from "@/types/game";

interface GameState {
  isLoading: boolean
  items: Game[]
}

const initialState: GameState = {
  isLoading: false,
  items: []
}

export const getItems = createAsyncThunk('game/getItems', async () => {
  return await axios.get('/api/games')
    .then((response: any) => {
      return response
    })
    .catch((error: any) => {
      return false
    })
})

export const gameSlice = createSlice({
  name: 'game',
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

export const {} = gameSlice.actions
export default gameSlice.reducer
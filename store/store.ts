import { configureStore } from "@reduxjs/toolkit"
import userReducer from "@/store/features/user/user-slice"
import publisherReducer from "@/store/features/publisher/publisher-slice"
import gameReducer from "@/store/features/game/game-slice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    publisher: publisherReducer,
    game: gameReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['publisher/getItems/fulfilled', 'game/getItems/fulfilled']
    }
  })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

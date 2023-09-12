import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@/store/features/user/user-slice'
import publisherReducer from "@/store/features/publisher/publisher-slice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    publisher: publisherReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['publisher/getItems/fulfilled']
    }
  })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

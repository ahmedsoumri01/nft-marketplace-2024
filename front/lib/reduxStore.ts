import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Uses localStorage as the default storage
import authReducer from './features/auth/authSlice';

// Persist configuration
const persistConfig = {
  key: 'auth', // Key to identify this persist entry in localStorage
  storage,
};

// Apply persistence to the auth reducer
const persistedReducer = persistReducer(persistConfig, authReducer);

// Create the Redux store
export const store = configureStore({
  reducer: {
    auth: persistedReducer, // Use the persisted reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable checks for redux-persist
    }),
});

// Create the persistor instance
export const persistor = persistStore(store);

// Types for Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

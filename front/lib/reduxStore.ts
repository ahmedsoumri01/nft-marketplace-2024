import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Uses localStorage as the default storage
import authReducer from './features/auth/authSlice';

// Persist configuration
const persistConfig = {
  key: 'auth', // Key to identify storage entry
  storage,
};

// Apply persistence to the auth reducer
const persistedReducer = persistReducer(persistConfig, authReducer);

// Create the Redux store
export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: persistedReducer, // Use the persisted reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // Disable serializable checks for redux-persist
      }),
  });
};

// Create the persistor instance
export const persistor = persistStore(makeStore());

// Types for Redux
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

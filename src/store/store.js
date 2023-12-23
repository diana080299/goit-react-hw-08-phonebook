import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authPersistReducer } from './auth/authSlice';

import { phoneBookSlice } from './phoneBook/phoneBook';
import { filterSlice } from './myFilterSlice';

export const store = configureStore({
  reducer: {
    auth: authPersistReducer,
    phoneBook: phoneBookSlice.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

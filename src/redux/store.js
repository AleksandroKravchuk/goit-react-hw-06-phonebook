import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  PAUSE,
  FLUSH,
  REHYDRATE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import reducers from './reducer';
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const store = configureStore({
  reducer: { contacts: persistReducer(contactsPersistConfig, reducers) },
  middleware,
  devTools: process.env.MODE_ENV === 'development',
});
export const persistor = persistStore(store);

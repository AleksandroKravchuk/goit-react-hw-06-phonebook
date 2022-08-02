import {
  configureStore,
  getDefaultMiddleware,
  // combineReducers,
} from '@reduxjs/toolkit';
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
import contacts from './reducer';
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
  blacklist:['filter']
};
// const rootReducer = combineReducers({
//   reducer: contacts,
// });

// const persistedReducer = persistReducer(persistConfig, contacts);
export const store = configureStore({
  reducer: { contacts: persistReducer(contactsPersistConfig, contacts)},
  middleware,
  devTools: process.env.MODE_ENV === 'development',
});
export const persistor = persistStore(store);

// export default { store, persistor };
// const store = configureStore[{reduser: { contacts: {
//     items: [],
//     filter: ''
// }
// },
//     devTools: process.env.MODE_ENV === 'development'
// }];

// export default store;

// import { createSlice, configureStore } from '@reduxjs/toolkit'

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 0
//   },
//   reducers: {
//     incremented: state => {
//       state.value += 1
//     },
//     decremented: state => {
//       state.value -= 1
//     }
//   }
// })

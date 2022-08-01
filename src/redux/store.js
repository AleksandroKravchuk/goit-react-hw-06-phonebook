import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import logger from 'redux-logger';
import { contacts } from "./reducer";
const middleware = [...getDefaultMiddleware(),logger]

export const store = configureStore({
  reducer: {contacts 
    },
    middleware,
    devTools: process.env.MODE_ENV === 'development',
})


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
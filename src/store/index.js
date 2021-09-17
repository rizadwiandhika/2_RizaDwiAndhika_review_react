import { configureStore } from '@reduxjs/toolkit'

import contactReducer from './contact'

// Ga perlu combine reducer karena configureReducer
// akan melakukannya
// PS: kecuali reducernya nested > 1 level
// Harus kita combine
const store = configureStore({
  reducer: {
    contact: contactReducer
  }
})

export default store

import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from "./slices/productSlices"
import BasketReducer from "./slices/basketSlices"

export const store = configureStore({

  reducer: {
    products:ProductReducer,
    basket:BasketReducer,
  },
})
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"



const initialState = {
  products: [],
  loading:false,
  selectedProduct:{},
}

const API = import.meta.env.VITE_API_KEY;

export const getAllProducts = createAsyncThunk("products",async() => {
    try {
        const response = await axios.get(API);
        return response.data;
    } catch (error) {
        alert(error)
    }
});

export const productSlices = createSlice({
    name:"product",
    initialState,
    reducers:{
        selectedProduct: (state,action) => {
            state.selectedProduct = action.payload
        },


    },
    extraReducers:(builder) => {
        builder.addCase(getAllProducts.pending,(state) => {
            state.loading = true
        });
        
        builder.addCase(getAllProducts.fulfilled,(state,action) => {
            state.loading = false;
            state.products = action.payload;
        });
    }
})

export const { selectedProduct} = productSlices.actions

export default productSlices.reducer
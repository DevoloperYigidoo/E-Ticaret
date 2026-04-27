import { createSlice } from '@reduxjs/toolkit'

const getBasketFromStorage = () => {
    const savedBasket = localStorage.getItem("products");
    if(savedBasket) {
        return JSON.parse(savedBasket);
    } else {
        return []
    }
}

const initialState = {
  products: getBasketFromStorage(),
  isOpen:false,
  total:0
}

const writeBasketToStroge = (product) => {
   return localStorage.setItem("products",JSON.stringify(product));
}

export const basketSlices = createSlice({
    name:"basket",
    initialState,
    reducers:{
        setIsOpen:(state) => {
            state.isOpen = !state.isOpen
        },

        addBasket:(state,action) => {
            const findProduct = state.products.find((pro) => pro.id === action.payload.id)
            if(findProduct){
                const exractedData = state.products.filter((pro) => pro.id !== findProduct.id);
                findProduct.count += action.payload.count;
                state.products = [...exractedData,findProduct]
                writeBasketToStroge(state.products);
            }else {
                state.products = [...state.products,action.payload]
                writeBasketToStroge(state.products)
            }
        },
        totalAmount:(state) => {
            state.total = state.products.reduce((acc,amount) => acc + (amount.price * amount.count) ,0);
        },
        deleteProductToBasket:(state,action) => {
            const filteredData = state.products.filter((product) => product.id !== action.payload.id)
            state.products = filteredData;
            writeBasketToStroge(state.products)
        }
        
    }
})

export const { setIsOpen,addBasket,totalAmount,deleteProductToBasket } = basketSlices.actions

export default basketSlices.reducer
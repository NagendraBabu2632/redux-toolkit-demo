import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import statusCode from "../utils/statusCode";

const initialState = {
    data:[],
    status: statusCode.IDEL
}

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    
  },

  extraReducers: (builder)=>{
    builder.addCase(getProducts.fulfilled, (state,action)=>{
        state.data = action.payload;
        state.status = statusCode.SUCCESS;
    })
    .addCase(getProducts.pending,(state)=>{
        state.status = statusCode.LOADING;
    })
    .addCase(getProducts.rejected,(state)=>{
        state.status =  statusCode.ERROR

    })
  }
});

export const getProducts = createAsyncThunk('products/get',async ()=>{
    const data = await fetch("https://fakestoreapi.com/products")
    const result = await data.json()
    return result
})

// Reducer
export default productSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface InitialStateProp {
  data: any[];
  status: string | undefined;
  error: any;
}

let initialState: InitialStateProp = {
  data: [],
  status: undefined,
  error: {},
};

export const fetchProducts = createAsyncThunk("products", async () => {
  const response = await axios.get("https://dummyjson.com/products");
  // console.log(response);
  return response.data;
});

const ProductSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      ((state.status = "success"), (state.data = action.payload.products));
    });
  },
});

// export const {} = ProductSlice.actions;
export default ProductSlice.reducer;

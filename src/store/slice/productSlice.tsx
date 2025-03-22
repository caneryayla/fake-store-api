import { BaseAxiosService } from "@/api/BaseAxiosService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetProductDTO } from "../types/Products.type";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await BaseAxiosService.get("/products");
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    fetchProductsData: [],
    fetchProductsIsLoading: false,
    fetchProductsError: null as string | null,
  } as {
    fetchProductsData: GetProductDTO;
    fetchProductsIsLoading: boolean;
    fetchProductsError: string | null;
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.fetchProductsIsLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.fetchProductsIsLoading = false;
        state.fetchProductsData = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.fetchProductsIsLoading = false;
        state.fetchProductsError = action.error.message || null;
      });
  },
});

export default productSlice.reducer;

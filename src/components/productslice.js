//productslice.js

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  products: [],
  loading: false,
  error: null
};
export const ProductSlice = createSlice({
  name: 'products',
  initialState:initialState,
  reducers: {
    update_products(state, action) {
        console.log(typeof action.payload);
      state.products = [...action.payload]
    },
    setLoading(state, action) {
        state.loading = action.payload;
      },
      setError(state, action) {
        state.error = action.payload;
        state.loading = false;
      },
  },
});
export const fetchListOfProducts = (category) => async(dispatch) => {
    dispatch(setLoading(true));
  try {
    const response =  await fetch(`http://localhost:8000/${category}` , {
      method:'GET'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const products = await response.json();
    dispatch(update_products(products.data));
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
};
export const selectProducts = (state) => state.products.products;
export const { update_products, setLoading, setError  } = ProductSlice.actions;
export const ProductReducer = ProductSlice.reducer;
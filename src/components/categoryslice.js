//categoryslice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

export const CategorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    update_categories(state, action) {
      state.categories = [...action.payload];
    },
  },
});


export const fetchListOfCategories = () => async (dispatch) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/categories", {
      method: "GET",
    });
    const categories = await response.json();

    if (response.ok) {
      dispatch(update_categories(categories.categories));
    }
  } catch (error) {
    console.log("ocuured error")
    console.log(error);
  }
};

export const { update_categories } = CategorySlice.actions;
export const CategoryReducer = CategorySlice.reducer;
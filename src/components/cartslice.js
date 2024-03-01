//cartslice.js

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cartItems: [],
};

const Cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    Addtocart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    Removefromcart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => !(item.id === action.payload)
      );
    },
  },
});

export const storeinvoice = (invoicedata) => async (dispatch) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/invoice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(invoicedata),
    });
    if (response.ok) {
      console.log("invoice registered successfully");
    } else {
      console.log("failed to register invoice!!");
    }
  } catch (error) {
    console.log(error);
  }
};
export const { Addtocart, Removefromcart } = Cartslice.actions;

export const cartReducer = Cartslice.reducer;
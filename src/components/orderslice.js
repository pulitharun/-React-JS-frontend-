import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  orderdata: [],
};

export const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    update_invoices(state, action) {
      state.orderdata = [...action.payload];
    },
  },
});


export const fetchListOfInvoices = () => async (dispatch) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/invoices/${status}", {
      method: "GET",
    });
    const invoices = await response.json();

    if (response.ok) {
      dispatch(update_invoices(invoices.invoices));
    }


  } catch (error) {
    console.log("ocuured error")
    console.log(error);
  }
};

export const { update_invoices } = OrderSlice.actions;
export const OrderReducer = OrderSlice.reducer;
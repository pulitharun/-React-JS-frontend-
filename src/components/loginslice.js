//loginslice.js

import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    error: null,
  },
  reducers: {
    loginUserSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    loginUserFailure: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    }
  }
});

export const { loginUserSuccess, loginUserFailure, registerUserSuccess, registerUserFailure, logoutUser } = authSlice.actions;

export const loginUser = ({ username, password }) => async dispatch => {
  try {
    const response = await fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (response.ok) {
      const user = await response.json();
      dispatch(loginUserSuccess(user));
    } else {
      const errorData = await response.json();
      dispatch(loginUserFailure(errorData.message));
    }
  } catch (error) {
    dispatch(loginUserFailure(error.message));
  }
};


export default authSlice.reducer;

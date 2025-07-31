// src/store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const getUserFromLocalStorage = () => {
  try {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
  } catch (error) {
    console.error('Invalid user in localStorage:', error);
    localStorage.removeItem('user');
    return null;
  }
};

const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem('token');
  return token && token !== 'undefined' ? token : '';
};

const initialState = {
  user: getUserFromLocalStorage(),
  token: getTokenFromLocalStorage(),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('token', action.payload.token);
    },
    logout: (state) => {
      state.user = null;
      state.token = '';
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;

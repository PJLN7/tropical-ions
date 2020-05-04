import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstName: '',
    lastName: '',
    id: '',
  },
  reducers: {
    signin: (state, action) => {
      const { firstName, lastName, id } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.id = id;
    },
    logout: (state) => {
      state.firstName = '';
      state.lastName = '';
      state.id = '';
    },
  },
});

export const { signin, logout } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;

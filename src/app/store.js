import { configureStore } from '@reduxjs/toolkit';
import budgetReducer from '../features/budgetSlice';
import userReducer from '../features/userSlice';

export default configureStore({
  reducer: {
    budget: budgetReducer,
    user: userReducer,
  },
});

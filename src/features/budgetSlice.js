import { createSlice } from '@reduxjs/toolkit';

export const budgetSlice = createSlice({
  name: 'budget',
  initialState: {
    election: 0,
    salary: 0,
    expense: 0,
    savings: 0,
  },
  reducers: {
    setSalary: (state, action) => {
      const expensePercent = state.election / 100;
      state.salary = action.payload;
      state.expense = +((action.payload / 12) * expensePercent).toFixed(2);
      state.savings = +((action.payload / 12) * (1 - expensePercent)).toFixed(
        2
      );
    },
    setExpense: (state, action) => {
      state.election = +(action.payload * 100).toFixed(2);
      state.expense = +((state.salary / 12) * action.payload).toFixed(2);
      state.savings = +((state.salary / 12) * (1 - action.payload)).toFixed(2);
    },
  },
});

export const { setSalary, setExpense } = budgetSlice.actions;

export const selectBudget = (state) => state.budget;

export default budgetSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const INITIAL_STATE = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'category',
  initialState: INITIAL_STATE,
  reducers: {
    setCategories: (state, action) => {
      // look like we are mutating the object.. but it is not .. 
      // the state is a NEW OBJECT .. even though it does not seem like
      state.categories = action.payload;
    }
  }
});

export const { setCategories } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser: (state, action) => {
      // look like we are mutating the object.. but it is not .. 
      // the state is a NEW OBJECT .. even though it does not seem like
      state.currentUser = action.payload;
    }
  }
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;

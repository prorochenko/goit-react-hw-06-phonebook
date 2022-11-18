import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const myValueSlice = createSlice({
  name: 'myValue',
  initialState: 100,
  reducers: {
    increment(state, action) {
      return state + action.payload;
    },
    decrement(state, action) {
      return state - action.payload;
    },
  },
});

export const { increment, decrement } = myValueSlice.actions;

const myItemsSlice = createSlice({
  name: 'myValue',
  initialState: 100,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { add, remove } = myItemsSlice.actions;

export default configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
    items: myItemsSlice.reducer,
  },
});

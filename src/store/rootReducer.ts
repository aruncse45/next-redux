import { combineReducers } from '@reduxjs/toolkit';
import counterSlice from '@/store/slices/counterSlice';

const rootReducer = combineReducers({
  [counterSlice.name]: counterSlice.reducer,
});

export default rootReducer;

import { configureStore } from '@reduxjs/toolkit';
//import toDoReducer from './toDoListSlice';
import profileReducer from './profileSlice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});

export default store;

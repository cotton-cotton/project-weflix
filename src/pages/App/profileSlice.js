import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profileList: [],
  makingList: [],
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addProfile(state, action) {
      state.profileList.push(action.payload.data);
    },
    deleteProfile(state, action) {
      state.profileList = action.payload.data;
    },
  },
});

export const profileActions = profileSlice.actions;
export default profileSlice.reducer;

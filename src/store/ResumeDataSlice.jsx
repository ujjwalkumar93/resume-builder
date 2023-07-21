import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  user : {
  }
}
const resumeDataSlice = createSlice({
    name: "resumeDataSlice",
    initialState,
    reducers: {
      addInfo(state, action) {
        const payload = action.payload;
        state.user = payload // eslint-disable-line
      },
    },
  });

export const {addInfo} = resumeDataSlice.actions;

export default resumeDataSlice.reducer;
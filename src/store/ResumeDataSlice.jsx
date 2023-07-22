import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  personalInfo : {
  },
  currenExperience : {},
  experianceList : []
}
const resumeDataSlice = createSlice({
    name: "resumeDataSlice",
    initialState,
    reducers: {
      addPersonalInfoAction(state, action) {
        const payload = action.payload;
        state.personalInfo = payload // eslint-disable-line
      },
      addCurrentExperiance(state, action) {
        const payload = action.payload;
        state.currenExperience = payload // eslint-disable-line
      },
      addExperianceToList(state, action){
        state.experianceList.push(action.payload)
      }
    },
  });

export const {addPersonalInfoAction, addCurrentExperiance, addExperianceToList} = resumeDataSlice.actions;

export default resumeDataSlice.reducer;
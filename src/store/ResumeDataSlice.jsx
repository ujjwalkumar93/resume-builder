import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  personalInfo: {
  },
  currenExperience: {},
  experianceList: [],
  currentEducation: {},
  educationList: []
}
const resumeDataSlice = createSlice({
  name: "resumeDataSlice",
  initialState,
  reducers: {
    // code for handeling personal details
    addPersonalInfoAction(state, action) {
      const payload = action.payload;
      state.personalInfo = payload // eslint-disable-line
    },

    // code to handle experience
    addCurrentExperiance(state, action) {
      const payload = action.payload;
      state.currenExperience = payload // eslint-disable-line
    },
    addExperienceToList(state, action) {
      state.experianceList.push(action.payload)
    },
    updateExperienceList(state, action) {
      const modifiedExperienceData = state.experianceList.map(data => {
        const payload = action.payload;
        if (data._id === payload._id) {
          return payload
        }
        return data
      })
      return { ...state, experianceList: modifiedExperienceData }
    },
    deleteExperiance(state, action) {
      const payload = action.payload;
      const filteredExperienceData = state.experianceList.filter(data => data._id !== payload._id)
      return { ...state, experianceList: filteredExperienceData }
    },

    // code for handeling education details

    addCurrentEducation(state, action) {
      return { ...state, currentEducation: action.payload }
    },
    updateEducationList(state, action){

    },
    deleteEducation(state, action){

    }

  },
});

export const {
  addPersonalInfoAction,
  addCurrentExperiance,
  addExperienceToList,
  updateExperienceList,
  deleteExperiance,
  addCurrentEducation,
  updateEducationList,
  deleteEducation
} = resumeDataSlice.actions;

export default resumeDataSlice.reducer;
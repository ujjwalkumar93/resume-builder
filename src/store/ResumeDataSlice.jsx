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
      addExperienceToList(state, action){
        state.experianceList.push(action.payload)
      },
      updateExperienceList(state, action){
        const modifiedExperienceData = state.experianceList.map(data => {
          // let obj;
          const payload = action.payload;
          console.log('payload: ', payload, data)
          if(data._id === payload._id){
            return payload
          }
          return data
        })
        console.log('modifiedExperienceData: ', modifiedExperienceData)
        return { ...state, experianceList: modifiedExperienceData }
      }
      
    },
  });

export const {addPersonalInfoAction, addCurrentExperiance, addExperienceToList, updateExperienceList} = resumeDataSlice.actions;

export default resumeDataSlice.reducer;
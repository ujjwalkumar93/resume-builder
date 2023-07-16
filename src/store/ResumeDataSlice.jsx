import {createSlice} from '@reduxjs/toolkit';
const initialState = {}
const resumeDataSlice = createSlice({
    name: "resumeDataSlice",
    initialState,
    reducers: {
        addInfo(state, action){
            const x = state[action.payload]
        }
    }
});

export const {addInfo} = resumeDataSlice.actions;

export default resumeDataSlice.reducer;
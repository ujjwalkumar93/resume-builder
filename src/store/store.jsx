import { configureStore } from "@reduxjs/toolkit";
import  resumeDataSlice  from "./ResumeDataSlice";

const store = configureStore({
    reducer : {
        resumeData : resumeDataSlice
    }
});
export default store;
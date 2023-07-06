const { createSlice } = require("@reduxjs/toolkit");

const initialState={validation:false}
const validation=createSlice({
    name:"validation",
    initialState,
    reducers:{
    validation(state){
        state.validation=!state.validation;
    }
    }
})
export const validationStore=validation.reducer;
export const validationData=validation.actions;
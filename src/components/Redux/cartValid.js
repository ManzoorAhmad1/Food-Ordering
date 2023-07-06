const { createSlice } = require("@reduxjs/toolkit");

const initialState={validation:false, Notification:null}
const validation=createSlice({
    name:"validation",
    initialState,
    reducers:{
    validation(state){
        state.validation=!state.validation;
    },
    showNotification(state,action){
        state.Notification={
            status:action.payload.status,
            title:action.payload.title,
            message:action.payload.message
        }
    },
    }
})
export const validationStore=validation.reducer;
export const validationData=validation.actions;
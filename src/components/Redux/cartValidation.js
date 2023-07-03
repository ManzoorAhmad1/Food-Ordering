import { createSlice } from "@reduxjs/toolkit";

const initialState = { validation: false }
const validationCart = createSlice({
    name: "valdationCart",
    initialState,
    reducers: {
        valid: (state) => {
            state.validation = true
        }
    }
})

export const validationData = validationCart.actions;
export const validationStore = validationCart.reducer;
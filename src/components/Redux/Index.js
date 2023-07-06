import { configureStore } from "@reduxjs/toolkit";
import {  validationStore } from "./cartValid";
import { cartSliceStore } from "./cart-UI";


const rootReducer={
    validation:validationStore,
    cart:cartSliceStore
}
const store=configureStore({
    reducer:rootReducer
})
export default store;
import { validationStore } from "./cartValidation";
const { configureStore } = require("@reduxjs/toolkit")
const rootReducer = {
    validationStore: validationStore,
}
const store = configureStore({
    reducer: rootReducer,
})

export default store;

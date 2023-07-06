import { createSlice } from "@reduxjs/toolkit";
import { validationData } from "./cartValid";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        item: [],
        totalQuantity: 0,
    },
    reducers: {
        addCartItem: (state, action) => {
            state.totalQuantity++;
            let newItem = action.payload;
            let existingItem = state.item.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.item.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
            else {
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
                existingItem.quantity = existingItem.quantity + 1
            }
        },
        removeCartItem: (state, action) => {
            let id = action.payload;
            let existingItem = state.item.find(item => item.id === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.item = state.item.filter(item => item.id !== id)
            } else {
                existingItem.quantity--;
            }
        }
    }
})
export const cartSliceStore = cartSlice.reducer;
export const cartSliceData = cartSlice.actions;


export const cartItemData = (cart) => {

    return async (dispatch) => {
        dispatch(validationData.showNotification({
            status: "Loading",
            title: "Loading...",
            message: "featching data loaded"
        }))
        console.log("loading...")

        const loadingData = async () => {
            let response = await fetch("https://food-ordering-e2ff4-default-rtdb.firebaseio.com/cart.json",
                { method: "Put", body: JSON.stringify(cart) })
            console.log("data fetched")

            if (!response === "ok") {
                throw new Error("some error occured")
            }
        }
        try {
            await loadingData();
            dispatch(validationData.showNotification({
                status: "success",
                title: "success",
                message: "fetched data successfully"
            }))

            console.log("data fetched successfully")
        } catch (error) {
            dispatch(validationData.showNotification({
                status: "error",
                title: "error",
                message: "some error occurred"
            }))
        }

    }
}
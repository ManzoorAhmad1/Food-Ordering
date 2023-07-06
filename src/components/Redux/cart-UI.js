import { createSlice } from "@reduxjs/toolkit";
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

import { validationData } from "./cartValid";

export const cartItemData = (cart) => {

    return async (dispatch) => {
        dispatch(validationData.showNotification({
            status: "Loading",
            title: "Loading...",
            message: "featching data loaded"
        }))

        const loadingData = async () => {
            let response = await fetch("https://food-ordering-e2ff4-default-rtdb.firebaseio.com/cart.json",
                { method: "Put", body: JSON.stringify(cart) })
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

        } catch (error) {
            dispatch(validationData.showNotification({
                status: "error",
                title: "error",
                message: "some error occurred"
            }))
        }

    }
}
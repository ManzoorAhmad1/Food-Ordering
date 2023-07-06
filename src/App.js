import { Fragment, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import Notification from "./components/UI/Notification";
import { useDispatch } from 'react-redux';
import { validationData } from './components/Redux/cartValid';


let initialValue = true;
function App() {
  const notification = useSelector(state => state.validation.Notification)
  const dispatch = useDispatch();
  const validation = useSelector(state => state.validation.validation)
  const cart = useSelector(state => state.cart);
  useEffect(() => {
    const cardSentData = async () => {
      dispatch(validationData.showNotification({
        status: "Loading",
        title: "Loading...",
        message: "featching data loaded"
      }))
      let response = await fetch("https://food-ordering-e2ff4-default-rtdb.firebaseio.com/cart.json",
        { method: "Put", body: JSON.stringify(cart) })
      dispatch(validationData.showNotification({
        status: "success",
        title: "success",
        message: "fetched data successfully"
      }))

      if (!response === "ok") {
        throw new Error("some error occured")
      }

    }
    if (initialValue) {
      initialValue = false;
      return;
    }
    cardSentData().catch((error) => {
      dispatch(validationData.showNotification({
        status: "error",
        title: "error",
        message: "some error occurred"
      }))
    })

  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message}
      />}
      <Layout>
        {validation && <Cart />}
        <Products />
      </Layout>
    </Fragment>

  );
}

export default App;

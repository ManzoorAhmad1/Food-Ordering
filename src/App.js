import { Fragment, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import Notification from "./components/UI/Notification";
import { useDispatch } from 'react-redux';
import { cartItemData } from './components/Redux/cart-UI';

let initialValue = true;
function App() {

  const notification = useSelector(state => state.validation.Notification)
  const dispatch = useDispatch();
  const validation = useSelector(state => state.validation.validation)
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    if (initialValue) {
      initialValue = false;
      return;
    }
    dispatch(cartItemData(cart))
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

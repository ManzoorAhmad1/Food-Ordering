import { useDispatch, useSelector } from 'react-redux';
import { validationData } from '../Redux/cartValid';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cartQuantity=useSelector(state=>state.cart.totalQuantity)
  const dispatch=useDispatch()
  const myCartHandler=()=>{
    dispatch(validationData.validation())
  }
  return (
    <button className={classes.button} onClick={myCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;

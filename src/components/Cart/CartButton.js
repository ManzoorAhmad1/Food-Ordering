import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { validationData } from '../Redux/cartValidation';

const CartButton = (props) => {
  let selector = useSelector(state => state.validationStore.validation)
  let dispatch = useDispatch()
  const myCartHandler = () => {
    dispatch(validationData.valid())
  }
  return (
    <button className={classes.button} onClick={myCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{selector}</span>
    </button>
  );
};

export default CartButton;

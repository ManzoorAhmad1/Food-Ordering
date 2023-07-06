import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';


function App() {
  const validation = useSelector(state => state.validation.validation)
  return (
    <Layout>
      {validation && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

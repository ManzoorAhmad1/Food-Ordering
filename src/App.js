import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const validation=useSelector(state=>state.validationStore.validation)
  return (
    <Layout>
      {validation && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

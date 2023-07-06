import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_CART=[{
  id:"a1",
  title:"Car",
  price:6,
  description:"This is a first prodct - amazing!"
},
{
  id:"a2",
  title:"Car2",
  price:6,
  description:"This is a second prodct - amazing!" 
}
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_CART.map((item) => {
          return (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
  
};

export default Products;

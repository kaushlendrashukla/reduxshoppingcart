import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PROUCT = [
  {
    id: 'p1',
    price:10,
    title: "first product",
    description: 'this is the first product'
  },
  {
    id: 'p2',
    price:60,
    title: "seco product",
    description: 'this is the first product'
  },
]


const Products = (props) => {

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PROUCT.map((product) => 
          <ProductItem
          key = {product.id}
          id = { product.id}
          price={product.price}      
          title = {product.title}
          description=  {product.description}
        />
        )}
        {/* <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        /> */}
       
      </ul>
    </section>
  );
};

export default Products;

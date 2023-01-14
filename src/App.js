import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect} from 'react';
import { uiActions } from './store/uiSlice';
import { Fragment } from 'react';
import Notification from './components/UI/Notification';

function App() {
  const dispatch = useDispatch()
const showCart =    useSelector(state => state.ui.cartIsShown)
const cart = useSelector(state => state.cart);
const notification = useSelector(state => state.ui.notification)
let isInitial = true;
useEffect(() =>{
  const sendCartData = async () => {
    dispatch(uiActions.showNotification({
      status: 'pending',
      title: 'sending',
      message: 'sending data'
    }))
    const response = await fetch('https://react-api-2518b-default-rtdb.firebaseio.com/cart.json',
    {
     method: 'PUT',
     body: JSON.stringify(cart)
    }) 
    if(!response.ok) {
      throw new Error('sending cart data failed')
    }
   
   dispatch(uiActions.showNotification({
    status: 'success',
    title: 'success',
    message: 'sending data successfully'
  }))
  }
  if (isInitial){
    isInitial = false
    return
  }
 sendCartData().catch(err => {
  dispatch(uiActions.showNotification({
    status: 'error',
    title: 'error',
    message: 'sending data failed'
  }))
 })
}, [cart, dispatch])
  return (
    <Fragment>
      {notification  && <Notification  status={notification.statue} title = {notification.title} message = {notification.message} />}
    <Layout>
    { showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;

import './App.css';
import ProductGalery from './pages/ProductGalery/ProductGalery';
import { Route, useLocation } from 'react-router-dom';
import ProductPage from './pages/ProductPage/ProductPage';
import Profile from './pages/Profile/Profile';
import { OrderDetails } from './pages/OrderDetails/OrderDetails';
import CheckOut from './pages/Checkout/Checkout';
import { useDispatch } from 'react-redux';
import { listProducts } from './redux/products/products.actions';
import { useEffect } from 'react';
import Activate from './pages/Activate/Activate';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import ResetPasswordConfirm from './pages/ResetPasswordConfirm/ResetPasswordConfirm';
import NavBar from './components/NavBar/NavBar';


const App = () => {


  const dispatch = useDispatch()
  const { pathname } = useLocation();


  useEffect(() => {
 // https://reactrouter.com/web/guides/scroll-restoration
    window.scrollTo(0, 0);

    dispatch(listProducts())
  }, [dispatch, pathname])

  return (
    <div className='App' id='App'>
      <NavBar/>
      <Route exact path='/' component={Home} />
      <Route exact path='/products' component={ProductGalery} />
      <Route exact path='/products/:id' component={ProductPage} />
      <Route exact path='/order/:id' component={OrderDetails} />
      <Route exact path='/checkout' component={CheckOut} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/activate/:uid/:token' component={Activate} />
      <Route exact path='/email/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
      <Footer />
    </div>
  );
}

export default App;

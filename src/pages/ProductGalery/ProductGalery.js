import './productGalery.scss';
import Card from '../../components/Card/Card';
import { useDispatch, useSelector } from 'react-redux'; 
import { useEffect } from 'react';
import { listProducts } from '../../redux/products/products.actions'
import GradientSpinner from '../../components/Gradient-Spinner/GradientSpinner';
import MySmoothScroll from '../../components/mySmoothScroll/mySmoothScroll';
import NavBar from '../NavBar/NavBar';

const ProductGalery = () => {
    
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(listProducts())
      }, [dispatch])

      const productList = useSelector(state => state.productList)
      const {products, error, loading} = productList  
    
    return (


        <div className='product-galery page-color'> 
        <NavBar changeOnScroll={false} />
        {/* <h1> Please yourself because you deserve it</h1>
        <h3>Powerful, Natural, and Socially Responsible</h3> */}
        <div id='cards-container'>
    {

    loading ? <GradientSpinner/> : products.map((product) => (
        <Card 
        key={product._id} 
        product={product}/>
    ))
    }
          </div>
        </div>

    )
}





export default ProductGalery;
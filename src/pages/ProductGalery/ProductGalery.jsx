import './productGalery.scss';
import { useDispatch, useSelector } from 'react-redux'; 
import { useEffect } from 'react';
import { listProducts } from '../../redux/products/products.actions'
import GradientSpinner from '../../components/GradientSpinner/GradientSpinner';
import Card from '../../components/Card/Card';
import NavBar from '../../components/NavBar/NavBar';

const ProductGalery = () => {
    
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(listProducts())
      }, [dispatch])

      const productList = useSelector(state => state.productList)
      const {products, loading} = productList  
    
    return (
        <div className='product-galery page-color'> 
            <NavBar changeOnScroll={false} />
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
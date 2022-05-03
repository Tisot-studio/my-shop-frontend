import './product-page.scss';
import {connect} from 'react-redux';
import { addItem } from '../../redux/bag/bag.actions';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import NavBar from '../../components/NavBar/NavBar';

const ProductPage = ({match, addItem, history}) => {
    const [product, setProduct] = useState([])
    const [prodQty, setProdQty] = useState(Number(1))

    const productList = useSelector(state => state.productList)
    const {products, loading} = productList  


     useEffect(()=> {
        async function fetchProduct(){
            const {data} = await axios.get(`/api/products/${match.params.id}`)
            setProduct(data)
        }
        fetchProduct();
     }, [match.params.id])




     const shopNow = ()=> {
        addItem(product, prodQty)
        history.push('/checkout')

     }

    const relatedProducts = products.sort(()=> 0.5 - Math.random()).filter(prod => Number(prod._id) !== Number(match.params.id))
    
    const submitHandler = (e) => {
        e.preventDefault();
        addItem(product, prodQty) 
    }

   return (
        <div className='product-page'> 
        <NavBar changeOnScroll={false} />
        <div className='prod-page-container'>
            <div className='prod-page-img-container'>
                <img className='prod-page-img' src={product.imageCover}  alt='prod' />
            </div>
            <div className='prod-page-description-container'>
                <div>
                    {
                        product.available > 10 ? 
                        <p style={{
                            color:'green',
                            display:'flex',
                            justifyContent:'flex-end',
                            fontWeight:'bolder'}}>InStock</p> 
                            : product.available > 0 ? 
                            <p style={{
                                color:'#FFC700',
                                display:'flex',
                                justifyContent:'flex-end',
                                fontWeight:'bolder'}}>Almost over</p>
                                : <p style={{
                                    color:'red',
                                    display:'flex',
                                    justifyContent:'flex-end',
                                    fontWeight:'bolder'}}>Sold Out</p>
                    }

                </div>
                <div className='prod-page-title'> {product.title} </div>
                <div className='prod-page-price'> {product.price} RUB </div>
                <div className='prod-page-description'> {product.description} </div>
                
            {
                product.available > 0 ?
                <form onSubmit={submitHandler}>
                <div className='prod-page-quantity-and-button-container'>
                    <div className='remove-add-quantity-container'>
                        <div onClick={()=> prodQty > 0 ? setProdQty(prodQty - Number(1)) : null} className='decrease-value'> - </div>
                        <input 
                        type='text'
                        value={prodQty}
                        onChange={(e)=> e.target.value <= product.available ? 
                            setProdQty(Number(e.target.value)) 
                            : 
                            setProdQty(Number(product.available))}/>
                        <div onClick={()=> prodQty < product.available ? setProdQty(prodQty + Number(1)) : null} className='increase-value'> + </div>
                    </div>
                <div className='pp-buttons-container'>
                <div className='add-to-bag-button'>
                <button type='submit' value='Add to cart'> Add to cart </button></div>
                <div onClick={()=> product.available > 0 ? shopNow() : null } className='shop-now-button'> <p>Shop now</p></div> 
                </div>
                </div>
                </form>
                : null
            }
            </div>

        </div>
        <h1 className='rel-prod-h1'>Products you may also like</h1>
        <div id='pp-related-products-container'>
    {
    loading ? 'Loading...' : relatedProducts.slice(0, 4).map(product  => (
        <Card 
        key={product._id} 
        product={product}/>
    ))
    }
          </div>

        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    addItem: (item, prodQty) => dispatch(addItem(item, prodQty))
}) 

export default connect(null, mapDispatchToProps) (ProductPage);







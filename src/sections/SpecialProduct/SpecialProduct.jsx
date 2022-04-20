import './specialProduct.scss';
import { Link } from 'react-router-dom';

const SpecialProduct = ({products, loading}) => (
    <div className='special-product-section'>
                     <div className='special-product-section-img-container'>
                     <div className='sps-img-background'></div>
            {
                loading ? null: <img src={products[3].imageCover}  /> 
            }

                </div>
                <div className='special-product-section-text-and-button-container'>
                    <div className='sps-text-container'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Id convallis faucibus blandit egestas. 
                    </div>

                    <div className='sps-button-container'>
                    <Link to={`/products/${loading? null : products[3]._id}`} > 
                        <p className='sps-button'> View product </p>
                        </Link>
                    </div>
                </div>
    </div>
);

export default SpecialProduct;
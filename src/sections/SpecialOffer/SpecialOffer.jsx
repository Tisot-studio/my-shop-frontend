import './special-offer.scss';
import { Link } from 'react-router-dom';

const SpecialOffer = ({products, loading}) => (
    <div className='special-offer-section'>
                     <div className='special-offer-section-img-container'>
                     <div className='spof-img-background'></div>
            {
                loading ? null: <img src={products[2].imageCover}  /> 
            }

                </div>
                <div className='special-offer-section-text-and-button-container'>
                    <div className='spof-text-container'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Id convallis faucibus blandit egestas. 
                    </div>

                    <div className='spof-button-container'>
                    <Link to={`/products/${loading? null : products[2]._id}`} > 
                        <p className='spof-button'> View details </p>
                        </Link>
                    </div>
                </div>
    </div>
);

export default SpecialOffer;
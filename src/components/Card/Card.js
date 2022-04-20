import './card.scss';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { addItem } from '../../redux/bag/bag.actions';


const Card = ({product, addItem}) => {

    const {_id, title, price, imageCover, available} = product;

    return (
        <div className='card'> 
            <Link to={`/products/${_id}`}> 
                <div className='card-img-container'>
                    <img className='card-img' 
                    src={imageCover} 
                    alt='product'/>
                </div>
            </Link>  
            <div className='pc-title-price-wraper'>
                <p className="card-title"> <Link to={`/products/${_id}`}>{title} </Link> </p> 
                <div className='pc-price-add-to-card-button-container'>
                    <p className="card-price">{price} rub</p>
                    { available > 0 ? 
                    <div onClick={()=> addItem(product)}  className='add-to-bag-button'> Add to basket </div>
                    : <p className='pc-sold-out'> Sold Out </p> 
                    }
                </div>
            </div> 
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
        addItem: item => dispatch(addItem(item))
    }) 

export default connect(null, mapDispatchToProps)(Card);
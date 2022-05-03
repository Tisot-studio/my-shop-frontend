import './checkout-item.scss';
import { connect } from 'react-redux';
import {clearItemFromBag, addItem, removeItem} from '../../redux/bag/bag.actions';
import { Link } from 'react-router-dom';


const CheckOutItem = ({item, clearItemFromBag, addItem, removeItem})=> {
    const {_id, title, price, imageCover, quantity} = item;
    return (
        <div className='checkout-item-container'>
            <div className='ch-it-img-container'>
                <img src={imageCover} alt='item' />
            </div>
            <div className='ch-it-description-container'>
            <Link to={`/products/${_id}`}> 
                <div className='ch-it-title'>{title}</div>
                </Link>
                <div className='ch-it-price'>{price} RUB</div>
                <div className='ch-it-quantity-container'>
                    <div>Quantity</div>
                    <div className='ch-it-incr-decr-container'>
                        <span className='change-quantity minus' onClick={()=> removeItem(item)}> - </span>
                        <div className='ch-it-quantity'> {quantity} </div>
                        <span className='change-quantity plus' onClick={()=> addItem(item)}> + </span>
                    </div>
                </div>
            </div>
                <div className='ch-it-remove-button' onClick={()=> clearItemFromBag(item)}> Remove</div>
        </div>
    )
}




const mapStateToProps = dispatch => ({
    clearItemFromBag: item => dispatch(clearItemFromBag(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapStateToProps) (CheckOutItem);
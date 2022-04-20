import './bag-item.scss';
import { connect } from 'react-redux';
import {clearItemFromBag} from '../../redux/bag/bag.actions';
import { Link } from 'react-router-dom';

const BagItem = ({item, clearItemFromBag}) => {
    const {_id, title, price, imageCover, quantity} = item;
    return (
        <div className='bag-item-container'>

            <img src={imageCover} alt='item' />
            <Link to={`/products/${_id}`}> 
            <div className='bag-item-description-container'>
                <span>{title}</span>
                <span> Qty: {quantity} </span>
                <span> {price} Rub </span>
            </div>
            </Link>

            <div className='bg-it-remove-button' onClick={()=> clearItemFromBag(item)}> Remove</div>
        </div>
    );

}


const mapDispatchToProps = dispatch => ({
    clearItemFromBag: item => dispatch(clearItemFromBag(item))
})

export default connect(null, mapDispatchToProps) (BagItem);
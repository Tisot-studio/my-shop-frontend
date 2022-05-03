import './bag-icon.scss';
import { connect } from 'react-redux';
import { toggleBagHidden } from '../../redux/bag/bag.actions';
import { useSelector} from 'react-redux';


const BagIcon = ({toggleBagHidden})=> {

    const itemCount = useSelector(state => state.bag.bagItems.reduce(
        (accumQuantity, bagItem) => accumQuantity + bagItem.quantity, 0))

    return (
        <div className='nav-icon'>
            <p onClick={toggleBagHidden} className='shopping-icon'> Bag </p> 
            <span className='item-count'> {itemCount} </span>
        </div>
    
    )
}


const mapDispatchToProps = dispatch => ({
    toggleBagHidden: ()=> dispatch(toggleBagHidden())
})

export default connect(
    null,
    mapDispatchToProps
) (BagIcon);
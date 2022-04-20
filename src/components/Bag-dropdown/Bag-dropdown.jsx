import './bag-dropdown.scss';
import BagItem from '../Bag-item/Bag-item';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectBagItems } from '../../redux/bag/bag.selector';
import {Link, withRouter} from 'react-router-dom';
import { toggleBagHidden } from '../../redux/bag/bag.actions';


// не всегда нужно писать mapDispatchToProps, если подразумевается вставить только одно действие
// то можно обойтись посылом функции dispatch в компонент и затем вставить ее на нужное действие 
// например onClick как в данном примере, послав туда нужное действие, например toggleBagHidden

const BagDropdown = ({bagItems, history, dispatch})=> (
        <div class={`${bagItems.length > 2 ? 'overscroll':''} form-recover-pass-container`}> 
            <div class="empty-basket-card">
                <div class="text-container"> 
                {
                    bagItems.length ?
                    bagItems.map(bagItem => (<BagItem key={bagItem._id} item={bagItem} />))
                    : <p>Ваша корзина пуста</p>
                }
                </div>     
                <div class="shopping-button">  
                {
                    bagItems.length ?
                    <p onClick={()=> {
                    //так можно на одном клике запустить несколько действий
                    history.push('/checkout'); // 1. Действие - переходит на страницу checkout
                    dispatch(toggleBagHidden()) // 2. Действие - запускает функцию которая скрывает выпадающее меню
                    }}> Check Out </p>  
                    : null
                }
                    <p onClick={()=> {
                    dispatch(toggleBagHidden()) 
                    }}>Shopping</p> 
                </div>
            </div>
        </div>
)

const mapStateToProps = createStructuredSelector({
    bagItems: selectBagItems
})


export default withRouter(connect(mapStateToProps)(BagDropdown)) ;
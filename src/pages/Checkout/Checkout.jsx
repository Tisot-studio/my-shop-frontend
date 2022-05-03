import './check-out.scss';
import { connect, useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectBagItems, selectBagTotal } from '../../redux/bag/bag.selector';
import { useState, useEffect } from 'react';
import { saveShippingAddress, bagReset } from '../../redux/bag/bag.actions';
import { createOrder } from '../../redux/orders/orders.actions';
import CheckOutItem from '../../components/CheckoutItem/CheckoutItem';
import Forminput from '../../components/FormInput/FormInput';


const CheckOut = ({total, bagItems, history})=> {

    const bag = useSelector(state=> state.bag)
    const {shippingAdress} = bag

    const userLogin = useSelector((state) => state.userLogin)
    const {userInfo} = userLogin

    const shippingPriceTotal = total > 1000 ? 0 : 400;
    const orderPrice = Number(shippingPriceTotal) + Number(total);

    // Информация по доставке
    const [city, setCity] = useState(shippingAdress.city)
    const [postalCode, setPostalCode] = useState(shippingAdress.postalCode)
    const [street, setStreet] = useState(shippingAdress.street)
    const [house, setHouse] = useState(shippingAdress.house)

    // Контакты получателя
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({city, postalCode, street, house, fullName, email, phone, shippingPriceTotal, orderPrice}));
        
        
        dispatch(createOrder({
            paymentMethod: 'PayPal',
            taxPrice: 0,
            shippingPrice : shippingPriceTotal,
            orderPrice : orderPrice,
            orderItems: bagItems,
            shippingAdress: bag.shippingAdress,

            city : city,
            street : street,
            house : house,
            postalCode : postalCode,
            phone: phone,

        }));



       const y = ()=> dispatch(bagReset());

       setTimeout(y, 4000)
        console.log('sub')
    }
    const currentOrder = useSelector((state) => state.currentOrder)
    const {order} = currentOrder


    useEffect(()=>{
        if(bagItems.length === 0){
            if (order) {
                history.push(`/order/${order._id}`)
            } else {
                history.push(`/`)
            }

        } else{
            if(userInfo){
                setFullName(userInfo.name)
                setEmail(userInfo.email)
            } 
        }
    }, [bagItems.length, order, history, userInfo])

    return(
        <div className='check-out-page'>
        <form onSubmit={submitHandler}>
            <div className='content-container'>
                <div className='left-side'>
                    <div className='items-container'>
                    {
                        bagItems.map(bagItem => (<CheckOutItem key={bagItem.id} item={bagItem} />))
                    }
                    </div>
                    <h2>Shipping information</h2>
                    <div className='shipping-info-container'>

                            <div className='city-and-postal-code-container'>
                            <Forminput 
                            lable='Postal code'
                            name='postal-code' 
                            type='number' 
                            value={postalCode ? postalCode : ''}
                            onChange={(e)=>setPostalCode(e.target.value)}
                            formWidth = '150px'
                            required />
                           
                           
                            <Forminput 
                            lable='City'
                            name='city' 
                            type='text' 
                            value={city? city : ''}
                            onChange={(e)=>setCity(e.target.value)}
                            formWidth = '150px'
                            required />

                            

                            </div>
                            
                            <div className='street-and-house-container'>
                            <Forminput
                            lable='Street'
                            name='street' 
                            type='text' 
                            value={street ? street : ''}
                            onChange={(e)=>setStreet(e.target.value)}
                            formWidth = '250px'
                            required />

                            <Forminput
                            lable='House'
                            name='house' 
                            type='text' 
                            value={house ? house : ''}
                            onChange={(e)=>setHouse(e.target.value)}
                            formWidth = '100px'
                            required />
                            </div>                         
                    </div>
                    <h2>Contacts</h2>
                    <div className='firstName-and-lastName-container'>

                            <div className='first-name-container'>
                            <Forminput 
                            lable='Full name'
                            name='full_name' 
                            type='text' 
                            value={fullName}
                            onChange={(e)=>setFullName(e.target.value)}
                            formWidth = '250px'
                            required />

                            <Forminput
                            lable='Email'
                            name='email' 
                            type='email' 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            formWidth = '250px'
                            required />         

                            </div>
                            
                            <div className='email-and-phone-container'>


                            <Forminput
                            lable='Phone'
                            name='phone' 
                            type='text' 
                            value={phone ? phone : ''}
                            onChange={(e)=>setPhone(e.target.value)}
                            formWidth = '150px'
                            required />
                            </div>                         
                    </div>
    
    
    
                </div>
                <div className='right-side'>
    
                    <div className='info-about-order-container'>
                    <h2>Order information</h2>
                    <div className='total-price-container'>
                      
                      <div className='price'>
                        <span>Price</span>
                        <span>{total} RUB</span>   
                        </div>
                        

                        <div className='shipping'>
                        <span>Shiiping price</span>
                        <span>{shippingPriceTotal} RUB</span>
                        </div>

                        <div className='total'>
                        <span>Order price</span>
                        <span>{orderPrice} RUB</span>
                        </div>

                    </div>
                    <div className="form-reg-buttons">
                        {
                            userInfo ? <button type='submit' value='Submit Form' > Create order </button>
                            : 'Please login for place order'
                        }

                            </div>
    
    
                    </div>
                </div>
            </div>
    </form>
        </div>
    );
} 


const mapStateToProps = createStructuredSelector({
    bagItems: selectBagItems,
    total: selectBagTotal
})

export default connect(mapStateToProps)(CheckOut);
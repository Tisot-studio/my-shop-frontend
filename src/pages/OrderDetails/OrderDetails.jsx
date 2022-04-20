import './order_details.scss'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails, payOrder } from '../../redux/orders/orders.actions';
import GradientSpinner from '../../components/Gradient-Spinner/GradientSpinner';
import NavBar from '../NavBar/NavBar';
import { PayPalButton } from "react-paypal-button-v2";
import { ordersActionTypes } from '../../redux/orders/orders.types';



export const OrderDetails = ({match, history}) => {
    const orderId = match.params.id
    const dispatch = useDispatch()

    const orderDetails = useSelector(state => state.orderDetails)
    const {order, error, loading} = orderDetails 



    const orderPay = useSelector(state => state.orderPay)
    const {success: successPay, loading: loadingPay} = orderPay 

    const userLogin  = useSelector(state=> state.userLogin)
    const { userInfo} = userLogin

    
    // Кнопка оплаты PayPal
    const [sdkReady, setSdkReady] = useState(false)

    const addPyaPalScript = () => {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://www.paypal.com/sdk/js?client-id=AVGhdjuLFaUE3lgl7AyFLmPg08hhJ38ADvXuVSu6ASNmRC_OQI2r7htVW-q2tkADkgOS6cePavJCHrTx'
      script.async = true
      script.onload = () => {
        setSdkReady(true)
      }
      document.body.appendChild(script)
    }


    useEffect(()=> {
      if (error){
        history.push('/')
      }
      if (!order || successPay || order._id !== Number(orderId)) {
        dispatch({type: ordersActionTypes.ORDER_PAY_RESET})
        dispatch(getOrderDetails(orderId))
      } 
      else if (order.isPaid === false) {
          if(!window.paypal) {
              addPyaPalScript()
          } else {
              setSdkReady(true)
          }
      }
    }, [dispatch, order, orderId, userInfo, error, successPay,])

    const sucessPaymentHandler = (paymentResult) =>{
      dispatch(payOrder(orderId, paymentResult))

    }

   return (
          <div className='order-details-page'>
            <NavBar/> 
          <div className='order-details-container'>
    {
      loading ? <GradientSpinner/> :
          <div>
              <div className='od-header-wraper'> <h1> Order: {order._id}</h1> 
              {
                order.isPaid ? <div className='paid'> Paid </div> : <div className='not-paid'> Not Paid </div>
              }

               </div>
              <p> <span> Name: </span> {order.user.name}  </p>
              <p> <span> Address: </span>  {order.shippingAddress.postalCode}, {order.shippingAddress.city}, {order.shippingAddress.street} b.{order.shippingAddress.house}</p>
              <p> <span> Phone: </span>  {order.phoneNumber}  </p>
          </div>
}
          <div className='ord-det-items'>
          <h3> Items: </h3>
          {
            loading ? <GradientSpinner/> : order? order.orders.map(item => (
        <div className='ord-det-component'> 
            <div> <img src={item.image} /> </div>
          <div className='ord-det-description-wraper'>
            <div className='ord-det-item-title'> Title: {item.title} </div>
            <div> Quantity:  {item.qty} </div>
            <div> Price:  {item.price} </div>
          </div> 
        </div>
            )) : 'Errror'
              }
  
          </div>
  </div>
          <div className='ord-det-general-info-container' >
              <div className='ord-det-general-info-wraper'> 
                  <h1> Order Information </h1>
                  { loading ? <GradientSpinner/> :
                  <div className='order-price-container' >
                      <div className='price'>  
                          <span>Tax price: </span> 
                          <span> {order.taxPrice} Rub  </span>
                      </div>
                      <div className='shipping'>
                          <span> Shipping Price: </span> 
                          <span> {order.shippingPrice} Rub </span>   </div>
                      <div className='total'> 
                          <span> Total price:  </span> 
                          <span> {order.orderPrice} Rub </span>  
                      </div>

                       {
                         // Кнопка PayPal
                          !order.isPaid && (
                            <div className='pay-button-wraper'> 
                            {loadingPay && <GradientSpinner/>}

                            {!sdkReady ? (<GradientSpinner/>) 
                            : 
                            (<PayPalButton
                              amount = { order.orderPrice}
                              onSuccess = {sucessPaymentHandler} 
                            />) }
                            </div>
                            ) 
                        }
                  </div>
                  }                            

              </div>
          </div>         
  </div>
)}



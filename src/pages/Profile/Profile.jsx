import './profile.scss'
import { useState, useEffect } from 'react';
import { getUserDetails, updateUserProfile } from '../../redux/user/user.actions';
import { useDispatch, useSelector } from 'react-redux';
import { userActionTypes } from '../../redux/user/user.types';
import {getMyOrders} from '../../redux/orders/orders.actions';
import { Link } from "react-router-dom";
import Forminput from '../../components/FormInput/FormInput';
import NavBar from '../../components/NavBar/NavBar';


const Profile = ({history})=> {
    
    const userLogin = useSelector((state) => state.userLogin)
    const {userInfo} = userLogin

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPasword, setConfirmPassword] = useState('')

    const userDetails = useSelector((state) => state.userDetails)
    const {user} = userDetails

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
    const {success} = userUpdateProfile

    const myOrders = useSelector((state) => state.orderListMy)
    const {orders, loading } = myOrders
    
    const dispatch = useDispatch();


    // Если никакой информации о пользователе нет, то перенаправить пользователя на главную
    // страницу, если есть, то проверить условие: если нет обьекта user или в обьекте user 
    // нет параметра name, то вызать функцию посылающую на маршрут Profile. Если условие не выполняется, тоесть есть и то и другое
    // настроить имя и почту пользователся исходя из информации в обьекте user
    useEffect(()=>{
        if(!userInfo){
            history.push('/')
        } else{
            if(!user || !user.name || success){
                dispatch({type: userActionTypes.USER_UPDATE_PROFILE_RESET})
                dispatch(getUserDetails('profile'))
                dispatch(getMyOrders())
            } else{
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, history, userInfo, user, success,])
    
    // Обработчик событий


    const submitHandler = (e) => {
        e.preventDefault();
        if(password === confirmPasword){
            dispatch(updateUserProfile({'name': name, 'email':email, 'password': password}))
            console.log(localStorage.getItem('access'))
        } 
    }


    return (
        <div> 
        <NavBar changeOnScroll={false} />
        <div className='profile-page'>
            <div className='pp-h1-wraper'>
                <h1>My contacts</h1> 
                <h1>My orders</h1>
            </div>

            <div className='pp-sections-wraper'>
            <div className='user-info'>


            <div className='pp-form-wraper'> 
            <form onSubmit={submitHandler}>

<Forminput 
lable='Name'
name='name' 
type='text' 
value={name}
onChange={(e)=>setName(e.target.value)}
required/>

<Forminput 
lable='Email'
name='email' 
type='email' 
value={email}
onChange={(e)=>setEmail(e.target.value)}
required />


<Forminput
lable='Password'
name='password' 
type='password' 
value={password}
onChange={(e)=>setPassword(e.target.value)}
 required />

<Forminput
lable='Confirm password'
name='confirmpassword' 
type='password' 
value={confirmPasword}
onChange={(e)=>setConfirmPassword(e.target.value)}
required />

<div className="form-reg-buttons">
<button type='submit' value='Submit Form'> Update Information </button>
</div>

</form>
</div>
    
            </div>
            <div className='user-orders'>

            
            <div className='pp-table-wraper'>


            </div>
        <table >

            <tr className='tb-head'> 
                <th className='ord-tb-id'>Id</th>
                <th>Created At</th>
                <th>Is Paid</th>
                <th>Details</th>
            </tr>
            {
                loading? 'Loading...' : orders.map(order => (
                    <tr key={order._id}>
                    <td >{order._id}</td>  
                    <td>{order.createdAt.substring(0,10)}</td> 
                    <td>{order.isPaid ? 'Paid':'Not Paid'}</td> 
                    <td> <Link to={`/order/${order._id}`}> Details </Link> </td>
                    </tr>))
            }
        </table>

    
            </div>
            </div>
    
        </div> 
        </div>
    );

} 



export default Profile;
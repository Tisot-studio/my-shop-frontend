import './signin.style.scss';
import Forminput from '../FormInput/FormInput';
import { useState} from 'react';
import { login } from '../../redux/user/user.actions';
import { useDispatch, useSelector } from 'react-redux';


const SignIn = ({history})=> {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const currentUser = useSelector((state) => state.userLogin)

    const {error, loading, userInfo} = currentUser
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
        console.log('sub')
    }

    return (
        <div className="forms-container"> 

        <p>{error? `Wrong email or password. Please, try again.`: null}</p>
            <form onSubmit={submitHandler}>

            <Forminput 
            lable='Email'
            name='email' 
            type='email' 
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            formMarginRight = '0px'
            required />

            <Forminput
            lable='Password'
            name='password' 
            type='password' 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            formMarginRight = '0px'
            required />

            <p className='message-about-success'>{loading ? 'Loading...' : userInfo ? userInfo.name ? null: userInfo : null }</p>
            
            <div className="form-sign-in-buttons">
            <button type='submit' value='Submit Form'> Login </button>
            </div>
            </form>
</div>)
}



export default SignIn;
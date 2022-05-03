import Forminput from '../FormInput/FormInput';
import './registration.style.scss';
import { useState, useEffect } from 'react';
import { register } from '../../redux/user/user.actions';
import { useDispatch, useSelector } from 'react-redux';



const RegistrationForm = ()=> {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPasword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const userRegister = useSelector((state) => state.userRegister)

    const { userInfo } = userRegister
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        if(password === confirmPasword){
            dispatch(register(name, email, password, confirmPasword))
            console.log('sub')
        } else{
            setMessage('Wrong password')
        }
    }

    useEffect(()=>{
        if (userInfo){
            setMessage(`Email with activation link sended on your email. 
            Please, activate your account.`)
        }
    }, [userInfo])



    return (
        <div className="reg-form-container"> 
        {
        userInfo ? <p>{message}</p> :
        <form onSubmit={submitHandler}>

            <Forminput 
                lable='Name'
                name='name' 
                type='text' 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                required
                formMarginRight = '0px' 
            />

            <Forminput 
                lable='Email'
                name='email' 
                type='email' 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
                formMarginRight = '0px' 
            />

            <Forminput
                lable='Password'
                name='password' 
                type='password' 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
                formMarginRight = '0px' 
            />

            <Forminput
                lable='Confirm password'
                name='confirmpassword' 
                type='password' 
                value={confirmPasword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                required
                formMarginRight = '0px' 
            />

            <div className="form-reg-button">
                <button type='submit' value='Submit Form'> Register </button>
            </div>
        </form>
        }
</div>)} 

export default RegistrationForm;
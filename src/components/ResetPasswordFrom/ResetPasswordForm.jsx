import './reset-password-form.scss';
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { resetPassword } from '../../redux/user/user.actions'
import Forminput from '../FormInput/FormInput';

export default function ResetPasswordForm() {

    const [requestSent, setRequestSent] = useState(false)
    const [email, setEmail] = useState('')

    const dispatch = useDispatch();

    const submitHandler = e => {
        e.preventDefault();
       dispatch(resetPassword(email)) 
       setRequestSent(true)
    }

    return (
        <div className="res-pas-forms-container"> 
        {
            requestSent ? <p className='success-message'>Link sended</p> :
            <>
                <form onSubmit={submitHandler}>
                    <p className='message-for-user'>RESET YOUR PASSWORD </p>
                    <p className='message-for-user'>We will send you an email to reset your password</p>

                    <Forminput 
                        lable='Email'
                        name='email' 
                        type='email' 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        formMarginRight = '0px'
                        required 
                    />

                    <div className="res-pas-button">
                        <button type='submit' value='Submit Form'> Submit </button>
                    </div>
                </form>
            </>
        }
           
</div>
    )
}

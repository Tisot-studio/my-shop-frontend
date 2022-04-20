import './reset-password-confirm.scss';
import {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import {useDispatch, useSelector } from 'react-redux'
import { resetPasswordConfirm } from '../../redux/user/user.actions'
import Forminput from '../../components/form-input/Form-input';
import NavBar from '../NavBar/NavBar';

export default function ResetPasswordConfirm({match}) {

        const [formData, setFormData] = useState({
            newPassword: '',
            reNewPassword: ''
        })
        const {newPassword, reNewPassword} = formData;

        const changeHandler = e => setFormData({...formData, [e.target.name]: e.target.value})
        const dispatch = useDispatch();

        const submitHandler = e => {
            e.preventDefault();
            const uid = match.params.uid
            const token = match.params.token
           dispatch(resetPasswordConfirm(uid, token, newPassword, reNewPassword)) 
           setSuccessMessage(true)
        }

        const [successMessage, setSuccessMessage] = useState(false)
    
        return (
            <>
            <NavBar/>
            <div className='reset-password-confirm-page'>
                {
                    successMessage ? 
                    <>
                    <p className='res-pas-conf-success-message'> Your password successfully changed! </p>
                    <Link to='/products'> Start shopping </Link>
                    </>
                    :
                    <>
                    <h1>Please, enter your new password</h1> 
    
    <form onSubmit={submitHandler}>
         
         <Forminput
             lable='Password'
             type='password'
             name='newPassword'
             value={newPassword}
             onChange={changeHandler}
             minLength='6'
             formMarginRight = '0px'
             required
         />
         
         <Forminput
             lable='Confirm Password'
             name='reNewPassword' 
             type='password' 
             value={reNewPassword}
             onChange={changeHandler}
             minLength='6'
             formMarginRight = '0px'
             required
         />
        <button className='res-pas-conf-button' type='submit'> Reset Password </button>
    </form>

                    </>
                }

               
            </div>
            </>
    )
}

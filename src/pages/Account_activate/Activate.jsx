import './activate.scss'
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { activateAccount, signinupHidden } from '../../redux/user/user.actions'
import { Redirect } from 'react-router'
import NavBar from '../NavBar/NavBar'
import { connect } from 'react-redux';





const Activate = ({match, signinupHidden}) => {

    // активация
    const [verified, setVerified] = useState(false)

    const userInfo = useSelector(state => state.userLogin.userInfo)

    const dispatch = useDispatch();

    const submitHandler = e => {
        e.preventDefault();
        const uid = match.params.uid
        const token = match.params.token
        dispatch(activateAccount(uid, token))
        setVerified(true)
        console.log(uid, token)
    }

    if (userInfo) {
       return <Redirect to='/'/>
    }

    return (
        <>
        <NavBar/>
        <div className='account-activate-page'>
            {verified ?
            <>
                <p> Your account successfuly activated. Now you can login with your 
                    email and password.
                </p>
                <p onClick={signinupHidden} className='acc-act-login-link'> Login </p>
            </>
            : 
            <>
                <h1> Please, activate your account</h1>
                <div className="form-sign-in-buttons">
                    <button onClick={submitHandler} type='submit' value='Submit Form'> Activate </button>
                </div>
            </>}  
        </div>
        </>
    )
}



const mapDispatchToProps = dispatch => ({
    signinupHidden: ()=> dispatch(signinupHidden()),
})

export default connect(null, mapDispatchToProps)(Activate);
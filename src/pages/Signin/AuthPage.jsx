import './auth-page.scss';
import SignIn from '../../components/Signin.component/Signin.component';
import RegistrationForm from '../../components/Registration.component/Registration.component';
import { useState } from 'react';
import LeftToRirghtUnderline from '../../components/Left_to_Right_Undrline/LeftToRightUnderline'
import { motion } from "framer-motion";
import { signinupHidden } from '../../redux/user/user.actions';
import { useDispatch } from 'react-redux';
import ResetPasswordForm from '../../components/resetPassword/ResetPasswordForm';


const AuthPage = ({hiddenAuth, userInfo}) => {

    const [loginForm, setLoginForm] = useState(true)
    const [passwordResetView, setPasswordResetView] = useState(false)

    const dispatch = useDispatch();
    
    const variants = {
        visible: { opacity: 1, y: -40, },
        hidden: { display: 'none', ease: [0.17, 0.67, 0.83, 0.67] }
      };

      const loginButton = ()=> {
        setLoginForm(true)
        setPasswordResetView(false)
      }

    return (
        <motion.div className='sign-in'
            animate={hiddenAuth || userInfo? "hidden" : "visible"}
            variants={variants}
            transition={{ delay: 0.2, duration: 0.6}}
            initial={{ opacity: 0 }}>

            <motion.div 
            className="form-sign-in"
            animate={ hiddenAuth || userInfo ? {opacity: 0, y: 100} : {opacity: 1, y: -100}}
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0 }} 
            >
             <div className='sign-in-conatainer'>
             <div class='form-sign-in-nav'>
            <p className={loginForm? "sign-in-active" :'sign-in-not-active'} onClick={()=> loginButton()}> <LeftToRirghtUnderline> Sign In </LeftToRirghtUnderline>  </p>
            <p className={ loginForm? "registration-button-not-active" :  "registration-button-active"} onClick={()=> setLoginForm(false)}> <LeftToRirghtUnderline> Register  </LeftToRirghtUnderline> </p>
            </div>
            {
                loginForm ?
                <>
                {
                    passwordResetView ? <ResetPasswordForm/> : 
                    <>
                        <SignIn /> 
                        <p className='forgot-password' onClick={()=> setPasswordResetView(true)}> 
                            Forgot <span className='password-word'> Password</span>? 
                        </p>
                    </>
                }
                </>
                : 
                <RegistrationForm /> 
            }
             </div>
             <div className='auth-img-container'>
             <div className='auth-close-button' onClick={()=> dispatch(signinupHidden())}> &#10006;</div>
             </div>
            </motion.div>          
        </motion.div>
    )
} 

export default AuthPage;
import './signin-icon.scss';
import { connect, useSelector } from 'react-redux';
import { logOut, signinupHidden } from '../../redux/user/user.actions';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useState } from 'react';


const SignInIcon = ({signinupHidden, logOut})=> {

    const currentUser = useSelector((state) => state.userLogin)
    const {loading, userInfo} = currentUser

    const [animate, setAnimate] = useState(false);

    const variants = {
      vizy: { opacity: 1, y: -40 },
      hidden: { opacity: 0, y: 0 }
    };

    return (
        <div className='nav-icon'>
            { 
                loading ? <p onClick={signinupHidden}> My account </p>: 
                userInfo ? 
                userInfo.name ? <span className='user-menu' onClick={() => setAnimate(!animate)} >{userInfo.name}
                <motion.div className='user-drop-menue'
                animate={animate ? "vizy" : "hidden"}
                variants={variants}
                transition={{ duration: 0.5 }}
                initial={{ opacity: 0 }}                            
                >
                <Link to='/profile'><div className='udm-item' >Profie</div> </Link> 
                <div className='udm-item' onClick={logOut} >LogOut</div>

                </motion.div>
                
                </span>
                : 
                <p onClick={signinupHidden}> My account </p>
                :         
                <p onClick={signinupHidden}> My account </p> 
            }
 
        </div>
    )
}




const mapDispatchToProps = dispatch => ({
    signinupHidden: ()=> dispatch(signinupHidden()),
    logOut: ()=> dispatch(logOut())

})


export default connect(null, mapDispatchToProps)(SignInIcon);
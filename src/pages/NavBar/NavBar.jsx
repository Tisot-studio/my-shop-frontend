import './nav-bar.scss';
import LeftToRightUnderline from '../../components/Left_to_Right_Undrline/LeftToRightUnderline';
import { useState, useEffect  } from 'react';
import Logo from './Logo/Logo';
import { Link } from 'react-router-dom';
import SignInIcon from '../../components/Signin-icon/Signin-icon'
import BagIcon from '../../components/Bag-icon/Bag-icon';
import { useSelector } from 'react-redux';
import AuthPage from '../../pages/Signin/AuthPage';
import BagDropdown from '../../components/Bag-dropdown/Bag-dropdown';

export default function NavBar({changeOnScroll = true}) {

    const userLogin = useSelector((state) => state.userLogin)
    const {signinupHidden, userInfo} = userLogin

    const bag = useSelector((state) => state.bag)
    const {hidden} = bag

// Hide and shrink navBar on scroll
    const [showNavBar, setShowNavBar] = useState(true)
    const [shrinkNav, setSrinkNav] = useState( changeOnScroll ? false : true)

    if (changeOnScroll) {
        let prevScrollpos = window.pageYOffset;

    window.onscroll = function() {

        let currentScrollPos = window.pageYOffset;

        if (prevScrollpos >= currentScrollPos) {
            setShowNavBar(true)

            // Если текущая позиция скролла превышает 870px то запускается фукция по условию которой будет меняться стиль
            if (document.body.scrollTop > 870 || document.documentElement.scrollTop > 870) {
                setSrinkNav(true)
                console.log(shrinkNav)
            } else {
                setSrinkNav(false)
            }
        } else {
            setShowNavBar(false)
        }
        
        prevScrollpos = currentScrollPos;
    }
    
    }
     


    return (
        <nav className='navigation-container' style={ showNavBar? {top:'0px'} : {top: '-100px'}} data-scroll-section>
            <div className='navigation'style={ shrinkNav ? {
                background:'#FFF2EE',
                color: '#7B7297',
                borderBottom: '#7B7297 1px solid'
                } : {
                background: 'transparent'}} >

                <div className='pages-list'>
                  <span><LeftToRightUnderline fontSize={ '16px'}>  <Link to='/products'> Shop </Link> </LeftToRightUnderline> </span>   
                  <span ><LeftToRightUnderline fontSize={'16px'}> About </LeftToRightUnderline> </span>  
                  <span><LeftToRightUnderline fontSize={ '16px'}> Blog </LeftToRightUnderline></span>   
                </div>
                
                <div className='nav-logo'>
                    <Link to='/'> <Logo 
                            color={ shrinkNav ? "#7B7297" : "black"}
                            style={ shrinkNav ? {
                                color: '#7B7297',
                                } : {
                                color: 'black'}}
                            /> </Link>
                </div>
                <div className='nav-links-container'>
                    <SignInIcon/> 
                    <BagIcon /> 
                </div>
            </div>
            <AuthPage hiddenAuth={signinupHidden} userInfo={userInfo} />
            {hidden? null :<BagDropdown/>}
        </nav>
    )
}

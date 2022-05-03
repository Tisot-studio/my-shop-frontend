import './nav-bar.scss';
import LeftToRightUnderline from '../LefttoRightUndrline/LeftToRightUnderline';
import { useState } from 'react';
import Logo from './Logo/Logo';
import { Link } from 'react-router-dom';
import SignInIcon from '../SignInIcon/SignInIcon';
import BagIcon from '../BagIcon/BagIcon';
import { useSelector } from 'react-redux';
import Auth from '../Auth/Auth';
import BagDropdown from '../BagDropdown/BagDropdown';

export default function NavBar({changeOnScroll = true}) {

    const userLogin = useSelector((state) => state.userLogin)
    const {signinupHidden, userInfo} = userLogin

    const bag = useSelector((state) => state.bag)
    const { hidden } = bag

// Hide and shrink navBar on scroll
    const [showNavBar, setShowNavBar] = useState(true)
    const [shrinkNav, setSrinkNav] = useState(changeOnScroll ? false : true)

    if (changeOnScroll) {
        let prevScrollpos = window.pageYOffset;

    window.onscroll = function() {

        let currentScrollPos = window.pageYOffset;

        if (prevScrollpos >= currentScrollPos) {
            setShowNavBar(true)

            // Если текущая позиция скролла превышает 870px то запускается фукция по условию которой будет меняться стиль
            if (document.body.scrollTop > 870 || document.documentElement.scrollTop > 870) {
                setSrinkNav(true)
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
        <nav className='navigation-container' style={ showNavBar? {top:'0px'} : {top: '-100px'}}>
            <div className='navigation'style={ shrinkNav ? {
                background:'#FFF2EE',
                color: '#7B7297',
                borderBottom: '#7B7297 1px solid'
                } : {
                background: 'transparent'}} >

                <div className='pages-list'>
                  <span><LeftToRightUnderline fontSize={ '16px'} bgColor={shrinkNav ? "#7B7297" : "black"}>  <Link to='/products' color={ shrinkNav ? "#7B7297" : "black"}> Shop </Link> </LeftToRightUnderline> </span>   
                  <span onClick={() => alert('Page is under development')}><LeftToRightUnderline fontSize={'16px'} bgColor={shrinkNav ? "#7B7297" : "black"}> About </LeftToRightUnderline> </span>  
                  <span onClick={() => alert('Page is under development')}><LeftToRightUnderline fontSize={ '16px'} bgColor={shrinkNav ? "#7B7297" : "black"}> Blog </LeftToRightUnderline></span>   
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
                 <span className='nav__link'><LeftToRightUnderline bgColor={shrinkNav ? "#7B7297" : "black"}> <SignInIcon/> </LeftToRightUnderline></span>   
                 <span className='nav__link'><LeftToRightUnderline bgColor={shrinkNav ? "#7B7297" : "black"}> <BagIcon />  </LeftToRightUnderline></span>  
                </div>
            </div>
            { signinupHidden ? null : <Auth userInfo={userInfo} /> }
            {hidden ? null : <BagDropdown/>} 
        </nav>
    )
}

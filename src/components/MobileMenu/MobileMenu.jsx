import './mobile-menu.scss';
import {useState} from 'react';
import { useSelector } from 'react-redux';
import Menu from './Menu';
import MenuButton from './MenuButton';
import MenuItem from './MenuItem';
import { Link } from 'react-router-dom';
import LeftToRightUnderline from '../Left_to_Right_Undrline/LeftToRightUnderline';
import SignInIcon from '../Signin-icon/Signin-icon';
import BagIcon from '../Bag-icon/Bag-icon';
import AuthPage from '../../pages/Signin/AuthPage';
import BagDropdown from '../Bag-dropdown/Bag-dropdown';



export default function MobileMenu()  {




    const userLogin = useSelector((state) => state.userLogin)
    const {signinupHidden, userInfo} = userLogin

    const bag = useSelector((state) => state.bag)
    const {hidden} = bag

    // shrink navBar on scroll
    const [shrinkNav, setSrinkNav] = useState(false)

    window.onscroll = function() {

            if (document.body.scrollTop > 415 || document.documentElement.scrollTop > 415) {
                setSrinkNav(true)
            } else {
                setSrinkNav(false)
            }
        } 
        



    const [menuOpen, setMenuOpen] = useState(false)

    
    function handleMenuClick() {
      setMenuOpen(!menuOpen)
    }

    const menu = [<span><LeftToRightUnderline fontSize={'16px'}>  <Link to='/products'> Shop </Link> </LeftToRightUnderline> </span>, 
      <span ><LeftToRightUnderline fontSize={'16px'}> About </LeftToRightUnderline> </span>,  
      <span><LeftToRightUnderline fontSize={'16px'}> Blog </LeftToRightUnderline></span>,
      <SignInIcon/> ,
      <BagIcon />,
      ]

    const menuItems = menu.map((val,index)=>{
      return (
        <MenuItem 
          key={index} 
          delay={`${index * 0.1}s`}
          >{val}
          </MenuItem>)
    });

    
   
    return(
        <div>
          <div className='container' style={ shrinkNav ? {
                background:'#FFF2EE',
                color: '#7B7297',
                borderBottom: '#7B7297 1px solid'
                } : {
                background: 'transparent'}}>

            <MenuButton open={menuOpen} onClick={()=>handleMenuClick()} shrinkNav={shrinkNav} />
            <div className='mob-logo' style={{color: menuOpen ? '#7B7297' : shrinkNav ? '#7B7297' : 'black'}}> Textura </div>
            <BagIcon />
          </div>
          <Menu open={menuOpen}>
            {menuItems}
          </Menu>
          <AuthPage hiddenAuth={signinupHidden} userInfo={userInfo} />
            {hidden? null :<BagDropdown/>}
        </div>
      )
  }
  

  
  
  
  
  
 
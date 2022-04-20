import './home.scss'
import HeroBanerOriginal_1 from './img/HeroBanerOriginal_2.jpg'
import img2 from './img/2.jpg';
import img3 from './img/3.png';
import img4 from './img/4.jpg';
import img5Carousel from './img/5_carousel.jpg';
import img6Carousel from './img/6_carousel.jpg';
import img7Carousel from './img/7_carousel.jpg';
import Circle from './img/icons/Ellipse.png';
import Arrow from './img/icons/Arrow.png';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import NavBar from '../NavBar/NavBar';
import MobileMenu from '../../components/MobileMenu/MobileMenu';

//  Reveal img
import { useRef, useEffect, useState } from 'react'
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import  {TimelineLite, Power2} from 'gsap';




export default function Home() {

    const productList = useSelector(state => state.productList)
    const { products, loading } = productList

    // Reveal Hero
    let containerHeroSection = useRef(null)
    let image = useRef(null)
    // Что бы был доступ к правилу нужно, что бы оно не было вложено в другие правило а было на верхнем уровне!
    let rule = CSSRulePlugin.getRule(".hp-img-wraper:after")

    const tl = new TimelineLite()

    useEffect(()=>{
    tl 
    .to(containerHeroSection, 0, {css:{visibility: 'visible'}})
    .to(rule, 1.4,{width: '0%', ease: Power2.easeInOut})
    .from(image, 1.4, {scale: 1.6, ease: Power2.easeInOut, delay: -1.6})

 
    }, [])

    // const [mobileScreen, setMobileScreen] = useState(false)


    // useEffect(()=>{
    //     console.log(window.screen.width)

    //     if (window.screen.width < 500){
    //         setMobileScreen(true)
    //     }

    // }, [window.screen.width])




    return (
        <div className='home-page' >
          <NavBar/> 
            <div data-scroll-container  >
            <section ref={el => containerHeroSection = el} className='hp-hero-section-container'  >
                <div className='hp-empty-container'></div>
                <div className='hp-img-wraper'>
                    <img ref={el=> image = el} src={HeroBanerOriginal_1} alt='img' />
                </div>
                <div className='hp-header-container'> 
                    <p className='taste' > Love for beauty is a taste. </p>
                    <p className='art'> The creation of beauty is an art. </p>
                    <p className='rwe'> Ralph Waldo Emerson </p>
                </div>
            </section>
            <section className='hp-brand-description' >
                <div className='hp-brand-description-message-container'>
                    <p>
                    Luxury, science-led natural harecare and accessories 
                    from around the world by the highest calibre of green science and 
                    innovation in the industry.
                    </p>
                </div>
            </section>

            <section className='hp-special-offer'>
                <div className='hp-special-offer-wraper'>
                    <div className='hp-special-offer-img-container with-parallax'>
                        <img src={img2} alt='img' />
                    </div>
                    <div className='hp-special-offer-description-container'> 
                        <p className='sp-of-header'> Olive era  - best haircare from Greece</p>
                        <p className='sp-of-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At adipiscing ante porttitor tristique et. 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            At adipiscing ante porttitor tristique et. </p>
                            <Link to='/products/1' >   <p className='sp-of-link' > View product </p>  </Link>
                    </div>
                </div>
                <div className='hp-special-offer-product-img-container with-parallax '> 
                        <img src={img3} alt='img'/>
                </div>
            </section>

            <section className='hp-about'>
                <div className='hp-about-wraper'>
                    <div className='hp-about-img-container with-parallax'>
                        <img src={img4} alt='img' />
                    </div>
                    <div className='hp-about-description-container'> 
                        <p className='ab-header'> Our Story</p>
                        <p className='ab-body'>Our mission is to establish 
                        Emma Lewisham as the global benchmark in beauty; 
                        in product - through providing luxurious skincare that is scientifically 
                        proven and 100% natural and in planet positive 
                        skincare - through leading a movement towards a circular, carbon positive 
                        and transparent industry. </p>
                        <p className='ab-link' onClick={()=> alert('Страница в разработке')}> Read more </p>
                    </div>
                </div>
            </section>

            <section className='hp-product-carousel'>
                <p> Best cosmetics for you from arond the world </p>
                <div className='hp-product-carousel-wraper '>
                <img src={img5Carousel} alt='img'/>
                <img src={img6Carousel} alt='img'/>
                <img src={img7Carousel} alt='img'/>
                <img src={img5Carousel} alt='img'/>
                <img src={img6Carousel} alt='img'/>
                <img src={img7Carousel} alt='img'/>
                </div>
            </section>

            <Link to='/products'>  <section className='hp-shop-baner'>
                <div className='hp-shop-baner-link'>
                <div className='hp-shop-baner-link-header-wraper'><p>Start shopping</p></div> 
                <div className='hp-shop-baner-png-container'>
                    <img className='circle' src={Circle} alt='img'/>
                    <img className='arrow' src={Arrow} alt='img'/>
                </div>
                </div>
            </section> </Link>

            </div>

        </div>

        
    )
}

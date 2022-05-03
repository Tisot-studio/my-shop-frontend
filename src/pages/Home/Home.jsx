import './home.scss'
import HeroBanerOriginal_1 from './img/HeroBanerOriginal_1.jpg'
import img2 from './img/2.jpg';
import img4 from './img/4.jpg';
import Circle from './img/icons/Ellipse.png';
import Arrow from './img/icons/Arrow.png';
import { Link } from 'react-router-dom';


export default function Home() {

    return (
        <div className='home-page'>
            <section className='hp-hero-section-container'>
                <div className='hp-empty-container'></div>
                <div className='hp-img-wraper'>
                    <img src={HeroBanerOriginal_1} alt='img' />
                </div>
                <div className='hp-header-container'>
                    <p className='taste'> Love for beauty is a taste. </p>
                    <p className='art'> The creation of beauty is an art. </p>
                    <p className='rwe'> Ralph Waldo Emerson </p>
                </div>
            </section>
            <section className='hp-brand-description' >
                <div className='hp-brand-description-message-container'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At ullam quo necessitatibus officiis eos iure libero aperiam? Optio quas qui eos itaque ullam iure eveniet natus.
                    </p>
                </div>
            </section>

            <section className='hp-special-offer'>
                <div className='hp-special-offer-wraper'>
                    <div className='hp-special-offer-img-container'>
                        <img src={img2} alt='img' />
                    </div>
                    <div className='hp-special-offer-description-container'>
                        <p className='sp-of-header'> Lorem ipsum - best haircare from Greece</p>
                        <p className='sp-of-body'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At adipiscing ante porttitor tristique et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At adipiscing ante porttitor tristique et.
                        </p>
                        <Link to='/products/1' >   <p className='sp-of-link' > View product </p>  </Link>
                    </div>
                </div>
            </section>

            <section className='hp-about'>
                <div className='hp-about-wraper'>
                    <div className='hp-about-img-container'>
                        <img src={img4} alt='img' />
                    </div>
                    <div className='hp-about-description-container'>
                        <p className='ab-header'> Our Story</p>
                        <p className='ab-body'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At adipiscing ante porttitor tristique et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At adipiscing ante porttitor tristique et.
                        </p>
                        <p className='ab-link' onClick={() => alert('Page is under development')}> Read more </p>
                    </div>
                </div>
            </section>

            <Link to='/products'>
                <section className='hp-shop-baner'>
                    <div className='hp-shop-baner-link'>
                        <div className='hp-shop-baner-link-header-wraper'><p>Start shopping</p></div>
                        <div className='hp-shop-baner-png-container'>
                            <img className='circle' src={Circle} alt='img' />
                            <img className='arrow' src={Arrow} alt='img' />
                        </div>
                    </div>
                </section>
            </Link>
        </div>
    )
}

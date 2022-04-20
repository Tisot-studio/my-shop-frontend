import './watch-all-products.scss'
import { Link } from 'react-router-dom';
import wapCircus  from './svg/Circus.svg';
import wapStrelka  from './svg/Strelka.svg';

const WatchAllProducts = () => (
    <Link to='/products'> 
    <div className='wap-section'>

        <div className='wap-baner'>
        <h1>VIEW ALL PRODUCTS</h1>
        </div>
        <div className='wap-svg-container'>
            <img className='wap-strelka-icon' src={wapStrelka} alt='strelka' />
            <img className='wap-circus-icon' src={wapCircus} alt='strelka'/>
        </div>
    </div>
    </Link>
);

export default WatchAllProducts;
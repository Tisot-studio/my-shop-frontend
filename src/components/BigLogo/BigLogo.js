import { Link } from 'react-router-dom';
import './BigLogo.scss';

const BigLogo = () => {
    return (
        <div className='logo-container'>
            <div className='logo'>
            <h1>TEXTURA</h1>
            </div>
                <div>
                <p>Your clean path for nice hair</p>
                <Link to='/products'> <p className='shopping-link'> Start shopping</p> </Link>
                </div>

        </div>
    )
}


export default BigLogo;
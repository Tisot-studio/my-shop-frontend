import './footer.scss';

export default function Footer() {
    return (
        <footer className='section-footer'>
            <div className='footer-section-logo-container'>
                <p className='footer-logo'>TEXTURA</p>
                <div className='footer-links'><span onClick={() => alert('Page is under development')}>Terms of Service </span>
                    <span> | </span>
                    <span onClick={() => alert('Page is under development')}>Private Policy</span></div>
            </div>

            <div className='footer-contacts-wraper'>
                <div className='footer-section-contacts-container'>
                    <h2>Contacts</h2>
                    <h6>Email:</h6>
                    <p>info@textura.com</p>

                    <h6>Phone:</h6>
                    <p>+7-999-999-99-99</p>
                </div>

                <div className='footer-section-contacts-container'>
                    <h2>Subscribe</h2>
                    <p className='social-link' onClick={() => alert('Instagram')}> <i class="fab fa-instagram"></i> Instagram </p>
                    <p className='social-link' onClick={() => alert('Facebook')}> <i class="fab fa-facebook"></i> Facebook</p>
                </div>
            </div>
        </footer>
    )
}

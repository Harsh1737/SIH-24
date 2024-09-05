import playStore from '../assets/play-store.png'
import appStore from '../assets/app-store.png'
import '../index.css'

function Footer() {
    return (
        <div className='mt-10'>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col-1">
                            <h3>Download Our App</h3>
                            <p>Download App for Android and iOS.</p>
                            <div className="app-logo">
                                <img src={playStore} alt="Play Store" className="w-32 h-auto mt-5" />
                                <img src={appStore} alt="App Store" className="w-32 h-auto mt-2" />
                            </div>
                        </div>
                        <div className="footer-col-2">
                            <img src="" alt="Logo" />
                        </div>
                        <div className="footer-col-3">
                            <h3>Useful Links</h3>
                            <ul>
                                <li>Coupons</li>
                                <li>Blog Post</li>
                                <li>Return Policy</li>
                                <li>Join Affiliate</li>
                            </ul>
                        </div>
                        <div className="footer-col-4 gap-4">
                            <h3>Follow Us</h3>
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>Join Affiliate</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer


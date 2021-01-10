import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="container">
                <div className="footer-info-company">
                    <ul>
                        <li>Home</li>
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Collection Statement</li>
                        <li>Help</li>
                        <li>Manage Account</li>
                    </ul>
                </div>
                <div className="clearfix"></div>
                <div className="b-coppy-right">
                    <span>Copyright &copy; 2016 Demo Streaming. All Rights Reserved</span>
                </div>
                <div className="footer-social-container">
                    <div className="footer-social">
                        <span className="social-icon"><img src="./assets/social/facebook-white.svg" alt="facebook"/></span>
                        <span className="social-icon"><img src="./assets/social/twitter-white.svg" alt="twitter"/></span>
                        <span className="social-icon"><img src="./assets/social/instagram-white.svg" alt="instagram"/></span>
                    </div>
                    <div className="footer-store-application">
                        <span className="application"><img src="./assets/store/app-store.svg" alt="store"/></span>
                        <span className="application"><img src="./assets/store/play-store.svg" alt="store"/></span>
                        <span className="application"><img src="./assets/store/windows-store.svg" alt="store"/></span>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
    )
}

export default Footer

import React from 'react';
import './Footer.css';
import logo from './footer_logo.png';

function Footer() {
  return (
    <div className='footer'>
        <div className="back__totop">
            <a href="#top">
                <h4>Back to Top</h4>
            </a>
        </div>
        
        <div className="footer__links__container">
            <div className="links__container">
                <h3 className="footer__links__head">Get to Know Us</h3>
                <a className="footer__links__nav" alt="" href="#">Careers</a>
                <a className="footer__links__nav" alt="" href="#">Blog</a>
                <a className="footer__links__nav" alt="" href="#">About Amazon</a>
                <a className="footer__links__nav" alt="" href="#">Investor Relations</a>
                <a className="footer__links__nav" alt="" href="#">Amazon Devices</a>
                <a className="footer__links__nav" alt="" href="#">Amazon Science</a>
            </div>
            <div className="links__container">
                <h3 className="footer__links__head">Make Money with Us</h3>
                <a className="footer__links__nav" alt="" href="#">Sell Products on Amazon</a>
                <a className="footer__links__nav" alt="" href="#">Sell on Amazon Business</a>
                <a className="footer__links__nav" alt="" href="#">Sell apps on Amazon</a>
                <a className="footer__links__nav" alt="" href="#">Become an Affiliate</a>
                <a className="footer__links__nav" alt="" href="#">Advertise Your Products</a>
                <a className="footer__links__nav" alt="" href="#">Self-Publish with Us</a>
            </div>
            <div className="links__container">
                <h3 className="footer__links__head">Amazon Payment Products</h3>
                <a className="footer__links__nav" alt="" href="#">Amazon Business Card</a>
                <a className="footer__links__nav" alt="" href="#">Shop with Points</a>
                <a className="footer__links__nav" alt="" href="#">Reload Your Balance</a>
                <a className="footer__links__nav" alt="" href="#">Amazon Currency Converter</a>
            </div>
            <div className="links__container">
                <h3 className="footer__links__head">Let Us Help You</h3>
                <a className="footer__links__nav" alt="" href="#">Amazon and Covid-19</a>
                <a className="footer__links__nav" alt="" href="#">Your Account</a>
                <a className="footer__links__nav" alt="" href="#">Your Orders</a>
                <a className="footer__links__nav" alt="" href="#">Shipping Rates & Policies</a>
                <a className="footer__links__nav" alt="" href="#">Returns & Replacements</a>
                <a className="footer__links__nav" alt="" href="#">Amazon Assistant</a>
            </div>
        </div>
        <div className="footer__logo__container">
            <img className="footer__logo" alt="Footer_Logo" src={logo} />
        </div>
    </div>
  )
}

export default Footer
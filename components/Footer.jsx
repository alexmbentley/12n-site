import React from 'react';
import styles from '@/styles/Footer.module.scss';
import { BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="row">
          <div className="footer-col">
            <h4>Company Info</h4>
            <ul>
              <li>
                <p> 1ST2NOTIFY LIMITED</p>
              </li>
              <li>
                <p>Company number: 12704130</p>
              </li>
              <li>
                <p>VAT number: 386 3496 50</p>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Socials</h4>
            <div className="social-links">
              <a href="https://www.instagram.com/1st2notify/?hl=en">
                <BsInstagram />
              </a>
              <a href="https://twitter.com/1st2notify?lang=en">
                <BsTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

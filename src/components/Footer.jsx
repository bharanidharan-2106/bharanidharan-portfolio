import React from 'react';
import './Footer.css';
import { FiCode } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <p className="footer-text">
                        Built with React <FiCode className="footer-icon" />
                    </p>
                    <p className="copyright">
                        &copy; {currentYear === 2026 ? '2026' : '2026'} Bharanidharan M. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

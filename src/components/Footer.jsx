import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="navigate-footer">
                <Link to='/'> 
                <img src="./img/coffee-beans-black.png" alt="Logo coffe" />
                    Coffee house
                </Link>
                <Link to='/ourcoffe'>
                    Our coffee
                </Link>
                <Link to='/pleasure'>
                    For your pleasure
                </Link>
            </div>
            <div className="footer-line">
                <div className="line"></div>
                <img src="./img/group-black.png" alt="Coffee group" />
                <div className="line"></div>
            </div>
        </footer>
    );
};

export default Footer;
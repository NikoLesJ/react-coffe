import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="navigate">
        <Link to='/'> 
            <img src="../img/coffee-beans.png" alt="Logo coffe" /> 
            Coffee house
        </Link>
        <Link to='/ourcoffe'>
            Our coffee
        </Link>
        <Link to='/pleasure'>
            For your pleasure
        </Link>
    </div>
    );
};

export default Menu;
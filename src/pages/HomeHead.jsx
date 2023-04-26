import React from 'react';
import { Link } from 'react-router-dom';

const HomeHead = () => {
    return (
    <div className="head-block">
        <div className="head-text">
            <p>Everything You Love About Coffee</p>
        </div>
        <div className="head-line">
            <div className="line"></div>
            <img src="./img/Group.png" alt="Coffee group" />
            <div className="line"></div>
        </div>
        <div className="head-text-lite">
            <p>We makes every day full of energy and taste</p>
        </div>
        <div className="head-text-lite">
            <p>Want to try our beans?</p>
        </div>
        <div className="head-btn">
            <Link to='/product'>More</Link>
        </div>
    </div>
    );
};

export default HomeHead;
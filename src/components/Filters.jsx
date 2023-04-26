import React from 'react';

const Filters = () => {
    return (
        <div className="block-filter">
            <p>Lookiing for</p>
            <input type="text" placeholder='start typing here...'/>
            <p>Or filter</p>
            <button>Brazil</button>
            <button>Kenya</button>
            <button>Columbia</button>
        </div>
    );
};

export default Filters;
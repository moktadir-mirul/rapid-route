import React from 'react';
import logo from "../../assets/logo.png"

const Logo = () => {
    return (
        <div className='pt-2 flex items-center'>
            <img className='relative bottom-2' src={logo} alt="Logo" />
            <h1 className='font-bold text-2xl inter relative right-2'>Rapid Route</h1>
        </div>
    );
};

export default Logo;
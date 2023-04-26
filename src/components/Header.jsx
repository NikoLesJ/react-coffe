import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeHead from '../pages/HomeHead';
import HomeCat from '../pages/HomeCat';
import Menu from './Menu';

const Header = () => {
    return (   
            <Routes>
                <Route path='/' element={
                    <header className='head-bg-big'>
                        <Menu />
                        <HomeHead />
                    </header>
                } />
                <Route path='/ourcoffe' element={
                <header className='head-bg-lite'>
                    <Menu />
                    <HomeCat />
                </header>
                } />
                <Route path='/pleasure' element={
                <header className='head-bg-pleasure'>
                    <Menu />
                    <HomeCat />
                </header>
                } />
                <Route path='/product' element={
                <header className='head-bg-lite'>
                    <Menu />
                    <HomeCat />
                </header>
                } />
            </Routes>
    );
};

export default Header;
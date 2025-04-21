import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../components/navbar/TopBar';
import LeftBar from '../components/navbar/LeftBar';
import BottomBar from '../components/navbar/BottomBar';

const Root = () => {
    return (
        <>
            <header>
                {/* <h1>Header</h1> */}
                <nav><TopBar /></nav>
            </header>
            <main className='flex' >
                {/* <h1>Root</h1> */}
                <nav className='hidden m-4 md:flex md:flex-row md:items-start'><LeftBar /></nav>

                <Outlet className='' />

                {/* <footer>Footer</footer> */}
            </main>
            <nav className='bg-white md:hidden'><BottomBar /></nav>
        </>
    );
};

export default Root;
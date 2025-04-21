import React from 'react';
import navbarList from '../../utilities/navbarList';
import { NavLink } from 'react-router-dom';


const Navbar = ({ tailwindProps }) => {
    // console.log(navbarList);

    return (
        <ul className={tailwindProps}>
            {
                navbarList.map((item, index) => (
                    <li
                        key={index}
                        className='mx-1 md:m-0 hover:bg-gray-200 hover:rounded-xl  hover:cursor-pointer hover:shadow-md transition-all duration-300'>
                        <NavLink to={item.link}
                            className='px-4 py-2 md:py-1 md:px-2'>
                            {/* {item.name} */}
                            <img src={item.icon} alt={item.name} className='w-9 h-9 bg-gray-200 p-1 rounded-full mx-auto' />
                        </NavLink>
                    </li>
                ))
            }
        </ul >
    );
};

export default Navbar;
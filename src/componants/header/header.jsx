import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css'

const Header = () => {
    return (
        <div className='work-sans flex justify-between items-center py-8 w-[90%] m-auto '>
            
            <div className='text-3xl font-semibold'>Book Vibe</div>
            <div className='space-x-8'>
                
                    <NavLink className='border-2 border-white hover:border-green-300 p-4 rounded-xl' to='/'>Home</NavLink>
                    <NavLink className='border-2 border-white hover:border-green-300 p-4 rounded-xl' to='/listedBooks'>Listed Books</NavLink>
                    <NavLink className='border-2 border-white hover:border-green-300 p-4 rounded-xl' to='/pagestoRead'>Pages to Read</NavLink>
                
            </div>
            <div className='space-x-4'>
                <button className='border-2 border-white bg-green-400 hover:border-green-300 hover:bg-white ease-in hover:text-black py-3 px-4 rounded-xl text-white font-semibold'>Sign in</button>
                <button className='border-2 border-white bg-sky-400 hover:border-sky-400 hover:bg-white ease-in hover:text-black py-3 px-4 rounded-xl text-white font-semibold'>sign up</button>
            </div>
            
        </div>
    );
};

export default Header;
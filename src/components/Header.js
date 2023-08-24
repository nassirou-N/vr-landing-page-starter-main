import React from 'react';
import {HiMenu} from 'react-icons/hi';
import {IoClose} from 'react-icons/io5'
import Nav from './Nav';
import Logo from '../assets/img/logo.svg'


const Header = ({handelMobile, navMob}) => {
  return (
    <header className='py-6 '>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          {/**logo */}
          <a href='#'>
            <img src={Logo} alt=''  className='h-[30px]' />
          </a>
          {/**nav bar desktop */}
          <Nav />
          {/**nav mobile btn */}
          <div className='lg:hidden' onClick={handelMobile}>
            {
              navMob ? <IoClose className='lg:hidden text-3xl text-white cursor-pointer' /> :<HiMenu className='lg:hidden text-3xl text-white cursor-pointer' />
            }
          </div>
          
          
        </div>
      </div>
    </header>
  );
};

export default Header;

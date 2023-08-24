import React from 'react';

const NavMobile = () => {
  return (
  <nav className='lg:hidden bg-[#251f3f] w-full h-full'>
    <ul className='flex flex-col items-center justify-between space-y-8 pt-12 font-secondary'>
      <li className='text-lg'>
        <a href='#'>Home</a>
      </li>
      <li className='text-lg'>
        <a href='#'>Company</a>
      </li>
      <li className='text-lg'>
        <a href='#'>Features</a>
      </li>
      <li className='btn'>
        <a href='#'>Sign up</a>
      </li>
    </ul>
  </nav>
  );
};

export default NavMobile;

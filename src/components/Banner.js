import React from 'react';
//
import Users from '../components/Users';
import Img from '../assets/img/banner-img.png'

const Banner = () => {
  return <section className='min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        {/**text */}
        <div>
          <h1 className="text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug">
            Let's Explore <br /> Three-Dimensional Visually.
          </h1>
          <p className='font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0'>
            lorem ipsum dolor sit amet consecteur addipiscing elit. Iste doloribus inventore harum cumque blanditiis minima.
          </p>
          <div className='flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:justify-start lg:max-w-none'>
            <button className='btn'>Get it now</button>
            <a href='#' className='border-b-2 border-transparent hover:border-white transition ease-out'>Explore Device</a>
          </div>
          <Users />
        </div>

        {/**image */}
        <div>
          <img src={Img} alt='' />
        </div>
      </div>
    </div>
  </section>;
};

export default Banner;

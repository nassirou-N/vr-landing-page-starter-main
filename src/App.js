import React, { useEffect, useState } from 'react';

// imports components
import Banner from './components/Banner';
import Header from './components/Header';
import NavMobile from './components/NavMobile';
import Experience from './components/Experience';
import Video from './components/Video';
import Headsets from './components/Headsets';
import Testimonial from './components/Testimonial';
import Explore from './components/Explore';
import Footer from './components/Footer';
/**scrol animate on aos */
import Aos from 'aos';
import 'aos/dist/aos.css';


const App = () => {
  const [navMob, setNavMob] = useState(false);
  const handelMobile = () => {
    setNavMob(!navMob);
  }
  //aos initialisations
  useEffect(()=>{
    Aos.init({
      duration:2500,
      deplay:400,
    });
  });


  return(
  <div className='relative overflow-hidden before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:-top-16 before:left-[600px] before:hidden before:lg:flex '>
    <Header handelMobile = {handelMobile} navMob={navMob} />
    <Banner />
    {/**mobile nav */}
    <div className={`${navMob ? 'right-0':'-right-full'} fixed top-[75px] lg:top-[94px] w-[35%] bottom-0 transition-all`}>
      <NavMobile />
    </div>
    {/**experience */}
    <Experience />
    <Video />
    <Headsets />
    <Testimonial />
    <Explore />
    <Footer />
  </div>);
};

export default App;

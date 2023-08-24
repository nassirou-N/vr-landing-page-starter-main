import React, { useState } from 'react';

// imports components
import Banner from './components/Banner';
import Header from './components/Header';
import NavMobile from './components/NavMobile';
import Experience from './components/Experience';
import Video from './components/Video';
import Headsets from './components/Headsets';


const App = () => {
  const [navMob, setNavMob] = useState(false);
  const handelMobile = () => {
    setNavMob(!navMob);
  }
  return <div className='relative overflow-hidden before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:-top-16 before:left-[600px] before:hidden before:lg:flex '>
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
  </div>;
};

export default App;

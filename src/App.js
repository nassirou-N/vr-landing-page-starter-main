import React, { useState } from 'react';

// imports components
import Banner from './components/Banner';
import Header from './components/Header';
import NavMobile from './components/NavMobile';

const App = () => {
  const [navMob, setNavMob] = useState(false);
  const handelMobile = () => {
    setNavMob(!navMob);
  }
  return <>
    <Header handelMobile = {handelMobile} navMob={navMob} />
    <Banner />
    {/**mobile nav */}
    <div className={`${navMob ? 'right-0':'-right-full'} fixed top-[75px] lg:top-[94px] w-[35%] bottom-0 transition-all`}>
      <NavMobile />
    </div>
  </>;
};

export default App;

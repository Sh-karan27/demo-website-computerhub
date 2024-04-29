import React from 'react';
import Hero from './Hero';
import Services from './Services';
import { useSelector } from 'react-redux';
import Features from './Features';
const Home = () => {
  const theme = useSelector((state)=> state.theme.value)
  return (
    <>
      <section className='w-full h-full flex flex-col items-center justify-center gap-10 '>
        <Hero />
        <Features/>
        <div className={` w-full mt-10 ${theme === 'dark' ? '' : 'bg-[#f5f5f5]'}`}>
          <Services />
        </div>
      </section>
    </>
  );
};

export default Home;

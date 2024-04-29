import React from 'react';
import Hero from './Hero';
import Services from './Services';

const Home = () => {
  return (
    <>
      <section className='flex flex-col items-center justify-center w-full h-full'>
        <Hero />
        <div className='bg-[#f5f5f5] w-full mt-10'>
          <Services />
        </div>
      </section>
    </>
  );
};

export default Home;

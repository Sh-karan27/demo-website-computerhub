import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../Slices/themeSlice';
import { NavList } from '../constants';
import Logo from '../assets/Logo.png';
import { MdSunny } from 'react-icons/md';
import { BsFillMoonStarsFill } from 'react-icons/bs';
const Navbar = () => {
  const [slide, setSlide] = useState('justify-start');
  const [smallMenu, setSmallMenu] = useState(false);

  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  return (
    <>
      <section className='w-full flex items-center justify-center relative border'>
        <div className='w-full flex items-center justify-between px-5 py-5 max-sm:px-2 max-sm:py-2'>
          <img src={Logo} alt='logo' className='w-[75px]' />

          <nav
            className={`flex items-center gap-10 transition-all duration-300 delay-300 ${slide} ease-linear cursor-pointer max-sm:hidden`}>
            {NavList.map((items, i) => (
              <div key={i}>
                <span>{items.toUpperCase().charAt(0) + items.slice(1)}</span>
              </div>
            ))}

            <button onClick={() => dispatch(toggleTheme())}>
              {theme === 'light' ? (
                <BsFillMoonStarsFill onClick={() => setSlide('justify-end')} />
              ) : (
                <MdSunny onClick={() => setSlide('justify-start')} />
              )}
            </button>
          </nav>
          <div className='flex items-center justify-center gap-2 max-sm:hidden'>
            <input
              type='text'
              className='rounded-md bg-transparent border focus:outline-none '
              placeholder='Search'
            />
            <button>Search</button>
          </div>

          <div
            className='flex flex-col w-10 h-10  items-center justify-center gap-1 '
            onClick={() => setSmallMenu(!smallMenu)}>
            <div
              className={`bg-black w-[30px] h-[3px] ${
                smallMenu ? 'rotate-45' : ''
              }`}></div>
            <div
              className={`bg-black w-[30px] h-[3px] ${
                smallMenu ? '-rotate-45' : ''
              }`}></div>
          </div>
          {smallMenu && (
            <nav className=' w-full bg-[#000000ad] absolute  top-20 z-30 flex flex-col items-center justify-center gap-10 px-5 py-5'>
              {NavList.map((items, i) => (
                <div key={i}>
                  <span>{items.toUpperCase().charAt(0) + items.slice(1)}</span>
                </div>
              ))}

              <button onClick={() => dispatch(toggleTheme())}>
                {theme === 'light' ? (
                  <BsFillMoonStarsFill
                    onClick={() => setSlide('justify-end')}
                  />
                ) : (
                  <MdSunny onClick={() => setSlide('justify-start')} />
                )}
              </button>
            </nav>
          )}
        </div>
      </section>
    </>
  );
};

export default Navbar;

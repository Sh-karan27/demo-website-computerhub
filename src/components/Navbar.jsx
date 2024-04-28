import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../Slices/themeSlice';
import { NavList } from '../constants';
import Logo from '../assets/Logo.png';
import { MdSunny } from 'react-icons/md';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io';
const Navbar = () => {
  const [slide, setSlide] = useState('justify-start');
  const [smallMenu, setSmallMenu] = useState(false);

  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  return (
    <>
      <section className='w-full flex items-center justify-center relative border-b'>
        <div className='w-full flex items-center justify-between px-5 py-5 max-sm:px-2 max-sm:py-2'>
          <img src={Logo} alt='logo' className='w-[75px]' />

          <nav
            className={`flex items-center gap-10 transition-all duration-300 delay-300 ${slide} ease-linear cursor-pointer max-sm:hidden`}>
            {NavList.map((items, i) => (
              <NavLink key={i} to={items === 'home' ? '/' : `${items}`}>
                <span>{items.toUpperCase().charAt(0) + items.slice(1)}</span>
              </NavLink>
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
            <IoMdSearch className='text-2xl' />
          </div>

          <div
            className=' cursor-pointer hidden max-sm:flex flex-col w-10 h-10  items-center justify-center gap-1  '
            onClick={() => setSmallMenu(!smallMenu)}>
            <div
              className={`bg-black w-[30px] h-[2px] ${
                smallMenu ? 'rotate-45' : ''
              } ${theme === 'dark' ? 'bg-dark' : 'bg-light'} `}></div>
            <div
              className={`bg-black w-[30px] h-[2px] ${
                smallMenu ? '-rotate-45' : ''
              } ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}></div>
          </div>
          {smallMenu && (
            <nav className=' nav-menu hidden  w-3/4 left-0 glassbox absolute  top-20 z-30  max-sm:flex flex-col items-center justify-center gap-20 px-5 py-5'>
              {NavList.map((items, i) => (
                <NavLink key={i} to={items === 'home' ? '/' : `${items}`}>
                  <span>{items.toUpperCase().charAt(0) + items.slice(1)}</span>
                </NavLink>
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

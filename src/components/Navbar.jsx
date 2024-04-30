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
  const [smallMenu, setSmallMenu] = useState(false);

  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section className='w-full flex items-center justify-center relative border-b'>
        <div className='w-full flex items-center justify-between px-5 py-5 max-sm:px-2 max-sm:py-2'>
          <img src={Logo} alt='logo' className='w-[75px]' />

          <nav
            className={`flex items-center gap-10 transition-all duration-300 delay-300  ease-linear cursor-pointer max-sm:hidden`}>
            {NavList.map((items, i) => (
              <NavLink to="/" key={i} >
                <span onClick={() => handleNavClick(items)}>{items.toUpperCase().charAt(0) + items.slice(1)}</span>
              </NavLink>
            ))}

            <button onClick={() => dispatch(toggleTheme())}>
              {theme === 'light' ? (
                <BsFillMoonStarsFill  />
              ) : (
                <MdSunny />
              )}
            </button>
          </nav>

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
                <NavLink key={i} to="/"  className=' cursor-pointer' >
                  <span onClick={() => handleNavClick(items)}>{items.toUpperCase().charAt(0) + items.slice(1)}</span>
                </NavLink>
              ))}

              <button onClick={() => dispatch(toggleTheme())}>
                {theme === 'light' ? (
                  <BsFillMoonStarsFill
                  />
                ) : (
                  <MdSunny  />
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

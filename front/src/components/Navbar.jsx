import PropTypes from 'prop-types';
import React, { forwardRef, useCallback, useRef, useState } from 'react';
import { ButtonIcon, ButtonNav } from './Button';

const Main = () => (
  <nav className='hidden h-full lg:flex'>
    <ButtonNav link={'/'} text={'Home'} />
    <ButtonNav link={'/about'} text={'About'} />
    <ButtonNav link={'/service'} text={'Service'} />
    <ButtonNav link={'/contact'} text={'Contact'} />
    <ButtonNav link={'/news'} text={'News'} />
  </nav>
);

const Navbar = () => {
  // MOBILE MENU
  const MobileMenuRef = useRef();
  const toggleMobileMenu = useCallback(() => {
    const elem = MobileMenuRef.current;
    elem.classList.toggle('hidden');
  }, []);

  // MODE
  const defMode = window.matchMedia('(prefers-color-scheme: dark)').matches && 1;
  const [index, setIndex] = useState(defMode);

  const mode = ['fa-sun', 'fa-moon'];

  // DEF MODE
  index === 1
    ? document.documentElement.classList.add('dark')
    : document.documentElement.classList.remove('dark');

  const toggleIcon = () => {
    setIndex((prev) => (prev + 1) % mode.length);
  };

  // PASSING MODE PROPS
  const modeProps = {
    mode,
    index,
    toggleIcon,
  };

  return (
    <header className='sticky top-0 z-[100]'>
      <nav className='flex items-center justify-between px-lg h-xl bg-light dark:bg-dark'>
        <div className='select-none'>
          <p className='font-bold uppercase'>SYSTemp</p>
        </div>

        <Main />

        <div className='items-center hidden h-full lg:flex'>
          <ButtonIcon icon={`fas ${mode[index]}`} size='xl' onClick={toggleIcon} />
          <ButtonNav link={'/login'} text={'Login'} />
        </div>

        <ButtonIcon icon={'fas fa-bars'} onClick={toggleMobileMenu} className={'lg:hidden'} />
      </nav>
      <MobileNav ref={MobileMenuRef} toggleMenu={toggleMobileMenu} {...modeProps} />
    </header>
  );
};

export const MobileNav = forwardRef(({ toggleMenu, ...modeProps }, ref) => {
  return (
    <div className='absolute top-0 hidden w-full h-screen bg-light/50 dark:bg-dark/50' ref={ref}>
      <aside className='w-full h-full sm:w-3xl bg-light dark:bg-dark float-end'>
        <header className='flex items-center justify-between px-lg h-xl'>
          <div>
            <p className='font-bold uppercase sm:hidden'>SYSTemp</p>
          </div>
          <ButtonIcon icon={'fas fa-xmark'} onClick={toggleMenu} />
        </header>

        <MobileMain {...modeProps} />
      </aside>
    </div>
  );
});
MobileNav.propTypes = {
  toggleMenu: PropTypes.any,
};
MobileNav.displayName = 'MobileMenu';

const MobileMain = ({ mode, index, toggleIcon }) => {
  return (
    <nav className='py-base'>
      <ButtonNav side link={'/'} text={'Home'} />
      <ButtonNav side link={'/about'} text={'About'} />
      <ButtonNav side link={'/service'} text={'Service'} />
      <ButtonNav side link={'/contact'} text={'Contact'} />
      <ButtonNav side link={'/news'} text={'News'} />

      <hr className='my-base border-dark/20' />

      <span
        onClick={toggleIcon}
        className='flex items-center cursor-pointer hover:border-l-2 hover:border-brand/50 active:border-brand px-lg sm:px-base gap-base hover:text-brand/50 active:text-brand'
      >
        Mode
        <ButtonIcon icon={`fas ${mode[index]}`} size='xl' className='justify-start' />
      </span>
      <ButtonNav side link={'/login'} text={'Login'} />
    </nav>
  );
};
MobileMain.propTypes = {
  index: PropTypes.any,
  mode: PropTypes.any,
  toggleIcon: PropTypes.any,
};

export default Navbar;

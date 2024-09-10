import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// TODO
// Text + Icon Button: Kombinasi teks dan ikon, bisa dengan atau tanpa background.

const Button = ({ base, children, text = 'Button', link, className = '', onClick }) => {
  return (
    <Link
      to={link}
      onClick={onClick}
      className={`${
        base
          ? ''
          : 'bg-brand text-light/90 hover:text-light active:bg-brand hover:bg-brand/50 font-bold px-base py-sm'
      } flex items-center text-center justify-center rounded gap-sm ${className}`}
    >
      {children || text}
    </Link>
  );
};
Button.propTypes = {
  base: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.any,
  text: PropTypes.string,
};

export const ButtonIcon = ({ icon, link, className = '', size = 'lg', onClick }) => {
  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      onClick={onClick}
      className={`flex justify-center items-center w-auto h-fit rounded-full p-sm cursor-pointer ${className}`}
    >
      <FontAwesomeIcon icon={icon} size={size} className='aspect-square' />
    </a>
  );
};
ButtonIcon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.any,
  link: PropTypes.any,
  onClick: PropTypes.any,
  size: PropTypes.string,
};

export const ButtonNav = ({
  side,
  children,
  text = 'ButtonNav',
  link,
  className = '',
  onClick,
}) => {
  // CLASSNAME
  const activeClass = side
    ? 'border-l-2 border-l-dark dark:border-l-light'
    : 'border-b-2 border-b-dark dark:border-b-light';
  const nonActiveClass = side
    ? 'hover:border-l-2 hover:border-l-brand/50 active:border-l-brand'
    : 'hover:border-b-2 hover:border-b-brand/50 active:border-b-brand';
  const sideClass = side ? 'sm:px-base px-lg' : 'px-base h-full';

  return link?.includes('#') ? (
    <a
      href={link}
      onClick={onClick}
      className={`${activeClass} ${nonActiveClass} ${sideClass} py-sm items-center flex ${className} `}
    >
      {children || text}
    </a>
  ) : (
    <NavLink
      to={link}
      onClick={onClick}
      className={({ isActive }) =>
        `${
          isActive ? activeClass : nonActiveClass
        } ${sideClass} py-sm items-center flex ${className} `
      }
    >
      {children || text}
    </NavLink>
  );
};
ButtonNav.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  link: PropTypes.any,
  onClick: PropTypes.any,
  text: PropTypes.any,
  side: PropTypes.any,
};

export default Button;

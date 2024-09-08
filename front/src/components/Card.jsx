import React from 'react';
import { PropTypes } from 'prop-types';
import Button from './Button';

// Image Card: Card dengan gambar di bagian atas atau samping.
// Clickable Card: Card yang bisa di-klik dengan hover effect.
// Detailed Card: Card yang lebih kompleks, mungkin dengan badge, rating, atau tag.

const Card = ({
  base,
  action,
  tittle = 'Card',
  subtittle,
  headline,
  subheadline,
  text,
  children,
  footer,
  btn,
  className = '',
  onClick,
}) => (
  <article
    className={`${!base && 'bg-brand/10'} flex flex-col max-w-xl rounded w-fit p-lg gap-base `}
    onClick={onClick}
  >
    <header className='space-y-base'>
      <div>
        <h3 className='leading-none'>{tittle}</h3>
        <p>{subtittle}</p>
      </div>

      {headline && (
        <div className='flex items-end'>
          <h2 className='self-start leading-none'>{headline}</h2>
          <p>{subheadline}</p>
        </div>
      )}
    </header>

    {children || (
      <main className={`${className} space-y-base`}>
        {text && <p>{text}</p>}

        {action && <Button text={btn} />}
      </main>
    )}

    <footer>{footer}</footer>
  </article>
);
Card.propTypes = {
  action: PropTypes.any,
  base: PropTypes.any,
  btn: PropTypes.any,
  children: PropTypes.any,
  className: PropTypes.string,
  footer: PropTypes.any,
  headline: PropTypes.any,
  onClick: PropTypes.any,
  subheadline: PropTypes.any,
  subtittle: PropTypes.any,
  text: PropTypes.string,
  tittle: PropTypes.string,
};

export const CardImage = ({
  img = '/img/bg/1.jpg',
  tittle = 'CardImage',
  text = 'Image Card, used for News',
  className = '',
  onClick,
}) => (
  <article
    className={`relative max-w-xs lg:max-w-sm overflow-hidden rounded aspect-square bg-brand/50 ${className}`}
    onClick={onClick}
  >
    <img src={img} alt='bg' className='object-cover h-full' />
    <main className='absolute top-0 flex flex-col justify-end w-full h-full bg-gradient-to-t from-dark to-transparent text-light p-base'>
      <h3>{tittle}</h3>
      <p>{text}</p>
    </main>
  </article>
);
CardImage.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
  onClick: PropTypes.any,
  text: PropTypes.string,
  tittle: PropTypes.string,
};

export const ProfileCard = ({
  img = '/img/icons/avatar/hp_boy.ico',
  text = 'The Text',
  name = 'Boy',
  className = '',
  onClick,
}) => (
  <article className={`flex items-center gap-base p-base rounded ${className}`} onClick={onClick}>
    <img src={img} alt='person' className='object-cover w-auto rounded-full h-xl aspect-square' />
    <main>
      <p>{text}</p>
      <hr />
      <h3>{name}</h3>
    </main>
  </article>
);
ProfileCard.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.any,
  text: PropTypes.string,
};

export default Card;

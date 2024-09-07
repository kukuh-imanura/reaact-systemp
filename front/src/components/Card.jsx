import React from 'react';
import { PropTypes } from 'prop-types';

// Image Card: Card dengan gambar di bagian atas atau samping.
// Clickable Card: Card yang bisa di-klik dengan hover effect.
// Detailed Card: Card yang lebih kompleks, mungkin dengan badge, rating, atau tag.

const Card = ({ tittle = 'Card', text, children, className = '', onClick }) => (
  <article className={`max-w-xl rounded w-fit p-base ${className}`} onClick={onClick}>
    {children || (
      <>
        <header>
          <h3>{tittle}</h3>
        </header>
        <main>
          <p>
            {text ||
              `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis obcaecati architecto velit
          eius neque ratione qui nemo ab aliquam numquam corporis, ipsum voluptatum ea nulla iste.
          Inventore mollitia numquam vel?`}
          </p>
        </main>
        <footer></footer>
      </>
    )}
  </article>
);
Card.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.any,
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

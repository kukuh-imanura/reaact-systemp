import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import Button, { ButtonIcon } from './Button';
import Input, { InputButton } from './Input';
import { Alert } from './Alert';

const NewsletterForm = () => {
  // FORM
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // TODO
    console.log(data);
    alertRef.current.classList.remove('hidden');
  };

  // ALERT
  const alertRef = useRef();

  const toggleAlert = () => {
    alertRef.current.classList.toggle('hidden');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='relative flex flex-wrap justify-center gap-sm'
    >
      <Alert type='success' text='Subscribe Berhasil' onClick={toggleAlert} ref={alertRef} />

      <div>
        <Input
          type={'email'}
          {...register('email', {
            required: 'Email wajib di isi',
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: 'Email tidak valid',
            },
          })}
        />
        {errors.email && (
          <p className='absolute font-light text-rose-500'>{errors.email.message}</p>
        )}
      </div>

      <InputButton text='Subscribe' />
    </form>
  );
};

const AttributionSection = () => {
  const location = useLocation();

  // Daftar halaman di mana atribusi ingin ditampilkan
  const showAt = ['/about', '/service'];

  return (
    <>
      {showAt.includes(location.pathname) && (
        <a
          href='http://storyset.com/business'
          target='_blank'
          rel='noopener noreferrer'
          className='cursor-default hover:text-dark/10 dark:hover:text-light/10'
        >
          Business illustrations by Storyset
        </a>
      )}
    </>
  );
};

const Newsletter = () => (
  <div className='flex flex-col items-center justify-between text-center lg:text-left lg:flex-row gap-base'>
    <div>
      <p className='font-bold'>Subscribe to our newsletter to get the latest updates.</p>
      <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
    </div>

    <NewsletterForm />
  </div>
);

const Navigation = () => (
  <div className='flex flex-wrap items-center justify-center'>
    <Button base link={'/'} text={'Home'} />
    <Button base link={'/about'} text={'About'} />
    <Button base link={'/service'} text={'Service'} />
    <Button base link={'/contact'} text={'Contact'} />
    <Button base link={'/news'} text={'News'} />
    <Button base link={'/faqs'} text={'FAQs'} />
  </div>
);

const Social = () => (
  <div className='flex justify-center gap-base'>
    <ButtonIcon icon={'fas fa-phone'} link={'https://wa.me/+1234567890'} />
    <ButtonIcon icon={'fas fa-envelope'} link={'mailto:info@company.com'} />
    <ButtonIcon icon={'fab fa-facebook'} link={'https://facebook.com'} />
    <ButtonIcon icon={'fab fa-x-twitter'} link={'https://twitter.com'} />
    <ButtonIcon icon={'fab fa-instagram'} link={'https://instagram.com'} />
  </div>
);

export const Footer = () => (
  <footer className='sticky bottom-0 z-0 flex flex-col bg-brand/10 p-lg gap-base lg:gap-lg'>
    <Newsletter />
    <hr className='border-dark/25 dark:border-light/25' />
    <Navigation />
    <Social />
    <div className='flex flex-col items-center justify-center text-center gap-x-sm sm:flex-row text-nowrap'>
      <p>123 Main Street, Suite 500.</p>
      <p>Sumbawa, Nusa Tenggara Barat, 84382</p>
    </div>
    <div className='flex flex-wrap-reverse justify-center cursor-default select-none gap-x-base text-dark/10 dark:text-light/10'>
      <a
        href='http://github.com/kukuh-imanura'
        target='_blank'
        rel='noopener noreferrer'
        className='cursor-help hover:text-dark/10 dark:hover:text-light/10'
      >
        © Copyright 2024 Kukuh Imanura
      </a>
      <AttributionSection />
    </div>
  </footer>
);

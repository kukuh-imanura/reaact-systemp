import React, { useRef } from 'react';
import Button from '@components/Button';
import Canvas from '@canvas/Canvas';
import Card from '@components/Card';
import { ProfileCard } from '@components/Card';
import { CardImage } from '@components/Card';

const HeroSection = () => {
  const coverRef = useRef();
  return (
    <section className='relative'>
      <Canvas ref={coverRef} />
      <div
        className='absolute top-0 flex flex-col items-center justify-center w-full h-screen text-center pt-xl gap-base bg-light/50 dark:bg-dark/50 backdrop-blur cursor-none'
        ref={coverRef}
      >
        <h1>SYSTEMP</h1>
        <p className='w-1/2 sm:w-600 line-clamp-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vero rerum sapiente ipsum
          asperiores labore quidem blanditiis voluptatum amet, excepturi optio culpa beatae impedit
          iure neque, voluptates vitae. Officia, velit.
        </p>
        <Button className='cursor-none'>Get Started</Button>
      </div>
    </section>
  );
};

const FeatureSection = () => (
  <section className='flex flex-col items-center px-lg py-xl gap-lg'>
    <h2 className='text-center'>Our Features</h2>

    <main className='flex flex-col justify-around w-full sm:flex-row'>
      <Card tittle='Feature 1' />
      <Card tittle='Feature 2' />
      <Card tittle='Feature 3' />
    </main>
  </section>
);

const ReviewSection = () => (
  <section className='flex flex-col items-center px-lg py-xl gap-lg'>
    <h2>What Our Clients Say</h2>

    <main className='flex flex-col w-full sm:flex-row justify-evenly'>
      <ProfileCard
        img='/img/profile/photo_6267014385251759924_y.jpg'
        text={`"Excellent support and results."`}
        name='Alex'
      />
      <ProfileCard text={`"This service changed my life!"`} name='Happy Customer' />
    </main>
  </section>
);

const CTASection = () => (
  <section className='flex flex-col items-center bg-brand/10 px-lg py-xl'>
    <h2>Ready to Join?</h2>
    <p className='mb-base'>Sign up today and start your journey with us.</p>
    <Button text='Sign Up Now' />
  </section>
);

const NewsSection = () => (
  <section className='px-lg py-xl'>
    <h2>Latest News</h2>
    <hr className='border-dark/20 my-base' />

    <div className='flex overflow-x-auto gap-lg snap-x *:snap-center *:shrink-0'>
      <CardImage img={'/img/bg/1.jpg'} tittle={'Blog Post 1'} text='Summary of the blog post.' />
      <CardImage img={'/img/bg/2.jpg'} tittle={'Blog Post 2'} text='Summary of the blog post.' />
      <CardImage tittle={'Blog Post 2'} text='Summary of the blog post.' />
    </div>
  </section>
);

const Home = () => {
  return (
    <main className='relative z-10 shadow-md bg-light dark:bg-dark'>
      <HeroSection />
      <FeatureSection />
      <ReviewSection />
      <CTASection />
      <NewsSection />
    </main>
  );
};

export default Home;

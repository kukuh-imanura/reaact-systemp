import React from 'react';
import { ButtonNav } from '@components/Button';
import { ProfileCard } from '@components/Card';

const IntroductionSection = () => (
  <section className='relative flex items-center justify-center h-screen overflow-hidden -mt-xl pt-xl'>
    <img
      src='/img/storyset/About us page-rafiki.svg'
      alt='storyset'
      className='absolute w-auto h-full -z-10'
    />

    <main className='flex flex-col items-center justify-center w-full h-full text-center bg-light/75 dark:bg-dark/75 px-lg'>
      <h1>About Us</h1>
      <p className='max-w-600 line-clamp-3'>
        We are a team of passionate individuals committed to delivering the best services to our
        clients.
      </p>
    </main>
  </section>
);

const VMSection = () => (
  <section id='vm' className='relative flex items-center justify-center lg:items-start px-lg pt-xl'>
    <img
      src='/img/storyset/Scope-rafiki.svg'
      alt='storyset'
      className='absolute h-3xl -z-10 lg:static'
    />
    <main className='flex flex-col w-full gap-base bg-light/50 dark:bg-dark/50'>
      <h2>Our Vision & Mission</h2>
      <div>
        <h3>Vision</h3>
        <p className='max-w-600'>
          We envision a world where technology seamlessly integrates into every aspect of life,
          making it easier and more enjoyable for everyone.
        </p>
      </div>

      <div>
        <h3>Mission</h3>
        <p className='max-w-600'>
          Our mission is to innovate and lead in the industry by providing top-notch solutions that
          meet the evolving needs of our clients.
        </p>
      </div>
    </main>
  </section>
);

const ValueSection = () => (
  <section
    id='values'
    className='relative flex items-center justify-center lg:justify-between px-lg py-xl gap-base'
  >
    <main className='flex flex-col w-full gap-base bg-light/50 dark:bg-dark/50'>
      <h2>Our Values</h2>
      <ul className='flex flex-col gap-sm'>
        <li>
          <h3 className='text-brand'>Integrity: </h3>
          <p>We believe in doing the right thing, always.</p>
        </li>
        <li>
          <h3 className='text-brand'>Innovation: </h3>
          <p>We strive to be at the forefront of technological advancement.</p>
        </li>
        <li>
          <h3 className='text-brand'>Customer Focus: </h3>
          <p>{`Our clients' satisfaction is our top priority.`}</p>
        </li>
        <li>
          <h3 className='text-brand'>Collaboration: </h3>
          <p>We believe in the power of teamwork.</p>
        </li>
      </ul>
    </main>
    <img
      src='/img/storyset/Winners-rafiki.svg'
      alt='storyset'
      className='absolute lg:static h-3xl -z-10'
    />
  </section>
);

const TeamSection = () => (
  <section id='team' className='flex flex-col items-center justify-center px-lg py-xl gap-base'>
    <h2>Meet the Team</h2>

    <div className='grid grid-cols-1 sm:grid-cols-2'>
      <ProfileCard
        img='/img/icons/avatar/FB_IMG_15911524233662449.jpg'
        text='CEO & Founder'
        name='John Doe'
      />

      <ProfileCard
        img='/img/icons/avatar/FB_IMG_15911524270279263.jpg'
        text='Chief Technology Officer'
        name='Jane Smithe'
      />

      <ProfileCard
        img='/img/icons/avatar/FB_IMG_15911524337543339.jpg'
        text='Head of Marketing'
        name='Mike Johnson'
      />

      <ProfileCard
        img='/img/icons/avatar/FB_IMG_15911524373500264.jpg'
        text='Stone Hashira'
        name='Tengen Uzui'
      />
    </div>
  </section>
);

const HistorySection = () => (
  <section
    id='history'
    className='flex flex-col items-center justify-center text-center bg-brand/10 px-lg py-xl'
  >
    <h2>Our History</h2>
    <p className='max-w-600'>
      {`Founded in 2010, our company started with a small team of dedicated professionals. Over
          the years, we've grown into a global leader in our field, with a reputation for excellence
          and innovation.`}
    </p>
  </section>
);

const Sidebar = () => {
  return (
    <aside className='sticky top-0 hidden h-full md:block pt-2xl pb-xl min-w-3xl'>
      <ButtonNav side text='Vision & Mission' link={'#vm'} />
      <ButtonNav side text='Values' link={'#values'} />
      <ButtonNav side text='History' link={'#history'} />
      <ButtonNav side text='Team' link={'#team'} />
    </aside>
  );
};

const About = () => {
  return (
    <main className='relative z-10 bg-light dark:bg-dark'>
      <IntroductionSection />

      <div className='flex h-full'>
        <Sidebar />

        <div>
          <VMSection />
          <ValueSection />
          <HistorySection />
          <TeamSection />
        </div>
      </div>
    </main>
  );
};

export default About;

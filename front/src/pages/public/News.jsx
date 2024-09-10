import React from 'react';
import Input, { InputButton } from '@components/Input';
import { CardImage } from '@components/Card';
import { useForm } from 'react-hook-form';

const SearchForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onClick={handleSubmit(onSubmit)} className='flex gap-sm *:shrink'>
      <Input
        placeholder='Search for articles...'
        {...register('search', {
          required: true,
        })}
      />
      <InputButton text='Search' />
    </form>
  );
};

const HeaderSection = () => {
  return (
    <header className='flex flex-col items-center justify-center text-center px-lg py-xl gap-base'>
      <div className='flex flex-col gap-sm'>
        <h1>Latest News & Blogs</h1>
        <p>
          Stay updated with the latest trends, insights, and articles from our industry experts.
        </p>
      </div>

      <SearchForm />

      <nav className='flex flex-wrap justify-center gap-base'>
        <a href='/category/technology'>Technology</a>
        <a href='/category/business'>Business</a>
        <a href='/category/development'>Web Development</a>
        <a href='/category/ai'>Artificial Intelligence</a>
        <a href='/category/trends'>Trends</a>
      </nav>
    </header>
  );
};

const RecentSection = () => (
  <section className='flex flex-col w-full p-lg lg:py-xl gap-lg'>
    <h2>Recent Posts</h2>

    <div className='flex overflow-x-auto gap-base snap-x *:snap-start *:shrink-0'>
      <CardImage
        action
        img='/img/bg/9.jpg'
        date='September 1, 2024'
        tittle='Improving Cybersecurity in 2024'
        text='With cybersecurity threats on the rise, it&rsquo;s essential to stay informed on how to protect your business and personal data...'
      />

      <CardImage
        action
        img='/img/bg/8.jpg'
        date='August 30, 2024'
        tittle='How to Build a Responsive Website in 2024'
        text='In the modern web, responsiveness is key. Learn the best techniques for building
          responsive websites that look great on any device...'
      />

      <CardImage
        action
        img='/img/bg/7.jpg'
        date='August 29, 2024'
        tittle='Improving Cybersecurity in 2024'
        text='With cybersecurity threats on the rise, it&rsquo;s essential to stay informed on how to protect your business and personal data...'
      />
    </div>
  </section>
);

const TrendingSection = () => (
  <section className='flex flex-col w-full p-lg lg:py-xl gap-lg'>
    <h2>Trending Articles</h2>

    <div className='flex gap-base overflow-x-auto *:shrink-0 snap-x *:snap-start'>
      <CardImage
        action
        img='/img/bg/7.jpg'
        date='July 28, 2024'
        tittle='The Future of Remote Work in a Post-Pandemic World'
        text='As companies continue to adopt remote work strategies, we explore the long-term
          implications and benefits of this new normal...'
      />

      <CardImage
        action
        img='/img/bg/6.jpg'
        date='July 28, 2024'
        tittle='Top 5 Emerging Tech Trends of 2024'
        text='From AI advancements to blockchain innovations, we cover the top tech trends to watch out
          for in 2024...'
      />

      <CardImage
        action
        img='/img/bg/5.jpg'
        date='July 28, 2024'
        tittle='The Future of Remote Work in a Post-Pandemic World'
        text='As companies continue to adopt remote work strategies, we explore the long-term
          implications and benefits of this new normal...'
      />
    </div>
  </section>
);

const ListSection = () => (
  <section className='flex flex-col w-full p-lg lg:py-xl gap-lg'>
    <h2>All Articles</h2>

    <div className=' flex *:shrink-0 gap-base snap-x *:snap-start overflow-x-auto'>
      <CardImage
        action
        img='/img/bg/5.jpg'
        date='August 20, 2024'
        tittle='How Technology is Shaping the Future'
        text='Technology continues to evolve, shaping the future of industries, workplaces, and everyday
          life...'
      />

      <CardImage
        action
        img='/img/bg/4.jpg'
        date='August 18, 2024'
        tittle='The Rise of Artificial Intelligence in Business'
        text='Artificial Intelligence (AI) has become a driving force in business, transforming
          operations, customer experience...'
      />

      <CardImage
        action
        img='/img/bg/3.jpg'
        date='August 15, 2024'
        tittle='10 Tips for Better Web Development in 2024'
        text='As the web development landscape evolves, staying up to date with best practices can
          improve performance, security, and user experience...'
      />
    </div>
  </section>
);

const News = () => {
  return (
    <main className='relative z-10 flex flex-col items-center bg-light dark:bg-dark'>
      <HeaderSection />
      <RecentSection />
      <TrendingSection />
      <ListSection />
    </main>
  );
};

export default News;

import React from 'react';
import { useForm } from 'react-hook-form';
import Input, { InputButton } from '../../components/Input';
import Button, { ButtonNav } from '../../components/Button';

// Question List: Pertanyaan dan jawaban yang bisa di-expand/collapse.
// Search: Fitur pencarian di FAQ.
// Contact Us: Jika pengguna tidak menemukan jawabannya, mereka bisa kontak langsung.

const HeaderSection = () => (
  <header className='flex flex-col items-center justify-center text-center px-lg py-xl gap-base'>
    <h1>Frequently Asked Questions (FAQs)</h1>
    <p>
      Find answers to the most commonly asked questions below. If you can’t find what you&apos;re
      looking for, feel free to contact us directly.
    </p>

    <SearchForm />
  </header>
);

const SearchForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex gap-sm'>
      <Input placeholder='Search for a question...' {...register('search', { required: true })} />
      <InputButton text='Search' />
    </form>
  );
};

const Sidebar = () => (
  <aside className='sticky top-0 hidden h-full w-3xl pt-2xl pb-xl sm:block'>
    <ButtonNav side text='Company' link={'#company'} />
    <ButtonNav side text='Service' link={'#service'} />
    <ButtonNav side text='Product' link={'#product'} />
    <ButtonNav side text='News' link={'#news'} />
  </aside>
);

const ListSection = () => {
  return (
    <section className='flex'>
      <Sidebar />

      <main className='px-lg pb-lg lg:pb-xl'>
        {/* <div id='systemp' className='space-y-base pt-xl'>
          <h2>Systemp</h2>

          <details>
            <summary className='cursor-pointer hover:text-brand/50 active:text-brand'>
              What system requirements do I need to use your service?
            </summary>
            <p>
              Our service works best on modern browsers like Chrome, Firefox, Safari, and Edge. We
              recommend using the latest version for optimal performance.
            </p>
          </details>

          <details>
            <summary className='cursor-pointer hover:text-brand/50 active:text-brand'>
              Is your system compatible with mobile devices?
            </summary>
            <p>
              Yes, our platform is fully responsive and works on most mobile devices, including
              smartphones and tablets.
            </p>
          </details>

          <details>
            <summary className='cursor-pointer hover:text-brand/50 active:text-brand'>
              Can I integrate your system with third-party apps?
            </summary>
            <p>
              Yes, we support integration with a variety of third-party applications via API. Please
              check our documentation for more details.
            </p>
          </details>
        </div> */}

        <div id='company' className='space-y-base pt-xl'>
          <h2>Company</h2>

          <details>
            <summary className='cursor-pointer hover:text-brand/50 active:text-brand'>
              Where is your company located?
            </summary>
            <p>
              Our headquarters is located in New York City, but we have offices around the globe,
              including London, Tokyo, and Sydney.
            </p>
          </details>

          <details>
            <summary className='cursor-pointer hover:text-brand/50 active:text-brand'>
              How long have you been in business?
            </summary>
            <p>
              We have been in business since 2010, providing top-tier software solutions to clients
              worldwide.
            </p>
          </details>

          <details>
            <summary className='cursor-pointer hover:text-brand/50 active:text-brand'>
              What industries do you specialize in?
            </summary>
            <p>
              We specialize in industries such as technology, finance, healthcare, and retail,
              helping companies in these sectors optimize their operations with our solutions.
            </p>
          </details>
        </div>

        <div id='service' className='space-y-base pt-xl'>
          <h2>Service</h2>

          <details>
            <summary className='cursor-pointer hover:text-brand/50 active:text-brand'>
              What services do you offer?
            </summary>
            <p>
              We offer a variety of services including software development, cloud solutions,
              consultancy, and IT support tailored to meet your business needs.
            </p>
          </details>

          <details>
            <summary className='cursor-pointer hover:text-brand/50 active:text-brand'>
              Do you offer support for international clients?
            </summary>
            <p>
              Yes, we offer 24/7 support for our international clients, and our team is proficient
              in multiple languages to assist you better.
            </p>
          </details>

          <details>
            <summary className='cursor-pointer hover:text-brand/50 active:text-brand'>
              How do I get a quote for your services?
            </summary>
            <p>
              You can request a quote by visiting our contact page and filling out the service
              inquiry form, or by reaching out to our sales team directly.
            </p>
          </details>
        </div>

        <div id='product' className='space-y-base pt-xl'>
          <h2>Product</h2>

          <details>
            <summary className='cursor-pointer hover:text-brand/50 active:text-brand'>
              What is your return policy?
            </summary>
            <p>
              We offer a 30-day return policy. If you&apos;re not satisfied with your purchase, you
              can return it within 30 days of receipt for a full refund.
            </p>
          </details>

          <details>
            <summary className='cursor-pointer hover:text-brand/50 active:text-brand'>
              How can I track my order?
            </summary>
            <p>
              Once your order has shipped, you will receive an email with tracking information. You
              can use this to track your order on our website or with the shipping carrier.
            </p>
          </details>

          <details>
            <summary className='cursor-pointer hover:text-brand/50 active:text-brand'>
              Do you offer international shipping?
            </summary>
            <p>
              Yes, we offer international shipping to most countries. Shipping costs and delivery
              times vary depending on the destination.
            </p>
          </details>

          <details>
            <summary className='cursor-pointer hover:text-brand/50 active:text-brand'>
              Can I change or cancel my order?
            </summary>
            <p>
              Yes, you can change or cancel your order within 24 hours of placing it. After that, we
              may have already processed your order for shipping.
            </p>
          </details>
        </div>

        <div id='news' className='space-y-base pt-xl'>
          <h2>News</h2>

          <details>
            <summary className='cursor-pointer hover:text-brand/50 active:text-brand'>
              How do I subscribe to your newsletter?
            </summary>
            <p>
              You can subscribe to our newsletter by entering your email address in the subscription
              box at the bottom of our homepage or the news section.
            </p>
          </details>

          <details>
            <summary className='cursor-pointer hover:text-brand/50 active:text-brand'>
              How often do you publish news updates?
            </summary>
            <p>
              We publish news updates on a bi-weekly basis, covering the latest company developments
              and industry trends.
            </p>
          </details>

          <details>
            <summary className='cursor-pointer hover:text-brand/50 active:text-brand'>
              Can I contribute to your blog?
            </summary>
            <p>
              Yes, we welcome guest contributors. Please visit our contact page for more information
              on how to submit your articles or news pieces.
            </p>
          </details>
        </div>
      </main>
    </section>
  );
};

const CTASection = () => (
  <section className='sticky bottom-0 z-10 flex flex-col items-center justify-center h-screen text-center p-lg lg:py-xl gap-base bg-dark/75 backdrop-blur'>
    <main>
      <h2>Still have questions?</h2>
      <p>If you can&apos;t find the answer you&apos;re looking for, feel free to contact us.</p>
    </main>
    <Button text='Contact Us' />
  </section>
);

const FAQs = () => {
  return (
    <main>
      <div className='relative z-20 bg-light dark:bg-dark'>
        <HeaderSection />
        <ListSection />
      </div>
      <CTASection />
    </main>
  );
};

export default FAQs;

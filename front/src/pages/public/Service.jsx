import React from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Service/Product List: Daftar dengan deskripsi, ikon, dan mungkin harga.
// Case Studies/Examples: Studi kasus atau contoh penggunaan.
// CTA: Ajak pengguna untuk mencoba layanan atau beli produk.

const ServiceSection = () => (
  <section className='relative flex items-center h-screen overflow-hidden -mt-xl pt-xl'>
    <main className='flex flex-col items-center justify-center w-full h-full text-center bg-light/75 dark:bg-dark/75 px-lg lg:text-left lg:items-start'>
      <h1>Our Services & Products</h1>
      <p>
        {`Explore a wide range of services and products designed to meet your needs. Whether you're
          looking for innovative solutions or high-quality products, we have something for everyone.`}
      </p>
    </main>
    <div className='absolute flex justify-center w-full gap-base -z-10 lg:static'>
      <div className='flex-col justify-center hidden opacity-25 md:flex gap-base w-200 lg:hidden'>
        <span className='rounded h-300 bg-brand/25'></span>
        <span className='rounded h-300 bg-brand/25'></span>
        <span className='rounded h-300 bg-brand/25'></span>
      </div>

      <div className='flex flex-col justify-center gap-base min-w-200 w-200'>
        <img
          src='/img/storyset/Ecommerce web page-pana.svg'
          alt='service'
          className='rounded h-300 bg-brand/25'
        />
        <img
          src='/img/storyset/Wall post-cuate.svg'
          alt='service'
          className='rounded h-300 bg-brand/25'
        />
      </div>
      <div className='flex flex-col justify-center gap-base min-w-200 w-200'>
        <span className='rounded h-300 bg-brand/25'></span>
        <img
          src='/public/img/storyset/Ecommerce web page-amico.svg'
          alt='service'
          className='rounded h-300 bg-brand/25'
        />
        <span className='rounded h-300 bg-brand/25'></span>
      </div>

      <div className='flex-col justify-center hidden opacity-25 md:flex gap-base w-200 lg:hidden'>
        <span className='rounded h-300 bg-brand/25'></span>
        <span className='rounded h-300 bg-brand/25'></span>
      </div>
    </div>
  </section>
);

const ListSection = () => (
  <section className='flex flex-col items-center p-lg py-xl gap-lg'>
    <h2>Our Offerings</h2>

    <div className='space-y-base'>
      <div className='flex flex-col gap-base sm:flex-row'>
        <Card
          action
          btn='Hire'
          tittle='Web Development'
          headline='$4'
          subheadline='/page'
          footer='We offer full-stack web development services, including front-end, back-end, and
            database management. Our team creates responsive, high-performance websites tailored to
            your business needs.'
        />

        <Card
          action
          btn='Hire'
          tittle='Mobile App Development'
          headline='$9'
          subheadline='/page'
          footer='From iOS to Android, we build seamless mobile applications that provide a user-friendly
            experience. We focus on performance, design, and scalability for your app needs.'
        />
      </div>

      <div className='flex flex-col gap-base sm:flex-row'>
        <Card
          action
          btn='Buy'
          tittle='SaaS Subscription'
          headline='$29'
          subheadline='/month'
          footer='Our SaaS platform provides a variety of tools to streamline your workflow, including
            project management, collaboration, and real-time analytics. Available in basic, pro, and
            enterprise packages.'
        />

        <Card
          action
          btn='Buy'
          tittle='E-commerce Platform'
          headline='$299&nbsp;'
          subheadline={`for setup, with monthly fees based on sales volume.`}
          footer='Our e-commerce platform offers an all-in-one solution for online retailers. Manage
            inventory, process orders, and track customer analytics with ease.'
        />
      </div>
    </div>
  </section>
);

const ExampleSection = () => (
  <section className='flex flex-col items-center justify-center px-lg py-xl gap-lg'>
    <h2>Case Studies</h2>

    <main className='flex overflow-x-auto gap-lg snap-x *:snap-start *:shrink-0'>
      <Card base tittle='Transforming Retail with E-commerce Solutions' headline='ABC Retail Co.'>
        <p>
          <strong className='text-brand'>Challenge:</strong> ABC Retail Co. wanted to expand their
          in-store presence with an online platform that could handle high traffic and integrate
          with their existing inventory system.
        </p>
        <p>
          <strong className='text-brand'>Solution:</strong>
          We developed a custom e-commerce platform that allowed ABC Retail Co. to process thousands
          of transactions daily, seamlessly integrating their in-store and online operations.
        </p>
        <p>
          <strong className='text-brand'>Results:</strong>
          Increased sales by 35% in the first quarter after launch and reduced operational overhead
          by 20%.
        </p>
      </Card>

      <Card base tittle='Mobile App Success for Startups' headline='XYZ Startup'>
        <p>
          <strong className='text-brand'>Challenge:</strong> XYZ Startup needed a mobile app that
          was intuitive, fast, and scalable to meet the growing demand for their service.
        </p>
        <p>
          <strong className='text-brand'>Solution:</strong> We built a cross-platform mobile app
          using React Native, which allowed XYZ Startup to launch on both iOS and Android with
          minimal development time.
        </p>
        <p>
          <strong className='text-brand'>Results:</strong> The app was downloaded over 100,000 times
          in the first month and achieved a 4.8-star rating on app stores.
        </p>
      </Card>
    </main>
  </section>
);

const PointSection = () => (
  <section className='flex items-center justify-center'>
    <img
      src='/img/storyset/Winners-rafiki.svg'
      alt='questionmark'
      className='absolute h-3xl -z-10 sm:hidden'
    />

    <div className='flex flex-col w-full gap-lg bg-light/50 dark:bg-dark/50 px-lg py-xl'>
      <h2 className='text-center'>Why Choose Our Services</h2>

      <div className='flex'>
        <img
          src='/img/storyset/Winners-rafiki.svg'
          alt='questionmark'
          className='hidden h-3xl lg:px-xl sm:block'
        />
        <ul className='space-y-sm'>
          <li>
            <h3 className='text-brand'>Expert Team:</h3>
            <p>Our team consists of experienced professionals who are leaders in their fields.</p>
          </li>
          <li>
            <h3 className='text-brand'>Customer-Centric Approach:</h3>
            <p>We work closely with our clients to ensure their satisfaction and success.</p>
          </li>
          <li>
            <h3 className='text-brand'>Scalable Solutions:</h3>
            <p>Our products and services are designed to grow with your business.</p>
          </li>
          <li>
            <h3 className='text-brand'>24/7 Support:</h3>
            <p>
              {`We're here to help, any time of day, every day of the
            week.`}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className='flex flex-col items-center justify-center text-center px-lg py-xl bg-brand/10 gap-lg'>
    <h2>Get Started Today</h2>
    <p>
      Ready to elevate your business with our services and products? Contact us today for a free
      consultation and find out how we can help you achieve your goals.
    </p>
    <div className='flex gap-base'>
      <Button text='Contact Us' />
      <Button base>
        <p>Get a Quote</p>
        <FontAwesomeIcon icon={'fas fa-chevron-right'} />
      </Button>
    </div>
  </section>
);

// const FAQSection = () => (
//   <section>
//     <h2>Frequently Asked Questions</h2>
//     <div>
//       <div>
//         <h3>What is the average project timeline?</h3>
//         <p>
//           Most projects are completed within 4 to 6 weeks, depending on complexity and scope. We
//           work closely with clients to meet deadlines and ensure satisfaction.
//         </p>
//       </div>
//       <div>
//         <h3>Do you offer custom solutions?</h3>
//         <p>
//           Yes! We pride ourselves on delivering tailored solutions that fit the specific needs of
//           our clients.
//         </p>
//       </div>
//       <div>
//         <h3>What support do you offer after project completion?</h3>
//         <p>
//           We offer ongoing maintenance, updates, and support packages to keep your product or
//           service running smoothly after launch.
//         </p>
//       </div>
//     </div>
//   </section>
// );

const Service = () => {
  return (
    <main className='relative z-10 bg-light dark:bg-dark'>
      <ServiceSection />
      <ListSection />
      <PointSection />
      <CTASection />
      {/* <FAQSection /> */}
      <ExampleSection />
    </main>
  );
};

export default Service;

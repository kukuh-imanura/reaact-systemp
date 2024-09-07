import React from 'react';

// Service/Product List: Daftar dengan deskripsi, ikon, dan mungkin harga.
// Case Studies/Examples: Studi kasus atau contoh penggunaan.
// CTA: Ajak pengguna untuk mencoba layanan atau beli produk.

const Service = () => {
  return (
    <main className='relative z-10 bg-light dark:bg-dark'>
      {/* Section: Service/Product Introduction */}
      <section>
        <h1>Our Services & Products</h1>
        <p>
          {`Explore a wide range of services and products designed to meet your needs. Whether you're
          looking for innovative solutions or high-quality products, we have something for everyone.`}
        </p>
      </section>

      {/* Section: Service/Product List */}
      <section>
        <h2>Our Offerings</h2>
        <div>
          <div>
            <h3>Service 1: Web Development</h3>
            <p>
              We offer full-stack web development services, including front-end, back-end, and
              database management. Our team creates responsive, high-performance websites tailored
              to your business needs.
            </p>
            <p>Starting at $500</p>
          </div>

          <div>
            <h3>Service 2: Mobile App Development</h3>
            <p>
              From iOS to Android, we build seamless mobile applications that provide a
              user-friendly experience. We focus on performance, design, and scalability for your
              app needs.
            </p>
            <p>Starting at $1000</p>
          </div>

          <div>
            <h3>Product 1: SaaS Subscription</h3>
            <p>
              Our SaaS platform provides a variety of tools to streamline your workflow, including
              project management, collaboration, and real-time analytics. Available in basic, pro,
              and enterprise packages.
            </p>
            <p>Plans start at $29/month</p>
          </div>

          <div>
            <h3>Product 2: E-commerce Platform</h3>
            <p>
              Our e-commerce platform offers an all-in-one solution for online retailers. Manage
              inventory, process orders, and track customer analytics with ease.
            </p>
            <p>Starting at $300 for setup, with monthly fees based on sales volume.</p>
          </div>
        </div>
      </section>

      {/* Section: Case Studies/Examples */}
      <section>
        <h2>Case Studies</h2>
        <div>
          <div>
            <h3>Case Study 1: Transforming Retail with E-commerce Solutions</h3>
            <p>Client: ABC Retail Co.</p>
            <p>
              Challenge: ABC Retail Co. wanted to expand their in-store presence with an online
              platform that could handle high traffic and integrate with their existing inventory
              system.
            </p>
            <p>
              Solution: We developed a custom e-commerce platform that allowed ABC Retail Co. to
              process thousands of transactions daily, seamlessly integrating their in-store and
              online operations.
            </p>
            <p>
              Results: Increased sales by 35% in the first quarter after launch and reduced
              operational overhead by 20%.
            </p>
          </div>

          <div>
            <h3>Case Study 2: Mobile App Success for Startups</h3>
            <p>Client: XYZ Startup</p>
            <p>
              Challenge: XYZ Startup needed a mobile app that was intuitive, fast, and scalable to
              meet the growing demand for their service.
            </p>
            <p>
              Solution: We built a cross-platform mobile app using React Native, which allowed XYZ
              Startup to launch on both iOS and Android with minimal development time.
            </p>
            <p>
              Results: The app was downloaded over 100,000 times in the first month and achieved a
              4.8-star rating on app stores.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Why Choose Us */}
      <section>
        <h2>Why Choose Our Services</h2>
        <ul>
          <li>
            <strong>Expert Team:</strong> Our team consists of experienced professionals who are
            leaders in their fields.
          </li>
          <li>
            <strong>Customer-Centric Approach:</strong> We work closely with our clients to ensure
            their satisfaction and success.
          </li>
          <li>
            <strong>Scalable Solutions:</strong> Our products and services are designed to grow with
            your business.
          </li>
          <li>
            <strong>24/7 Support:</strong>{' '}
            {`We're here to help, any time of day, every day of the
            week.`}
          </li>
        </ul>
      </section>

      {/* Section: Call to Action (CTA) */}
      <section>
        <h2>Get Started Today</h2>
        <p>
          Ready to elevate your business with our services and products? Contact us today for a free
          consultation and find out how we can help you achieve your goals.
        </p>
        <button>Contact Us</button>
        <button>Get a Quote</button>
      </section>

      {/* Section: FAQ */}
      <section>
        <h2>Frequently Asked Questions</h2>
        <div>
          <div>
            <h3>What is the average project timeline?</h3>
            <p>
              Most projects are completed within 4 to 6 weeks, depending on complexity and scope. We
              work closely with clients to meet deadlines and ensure satisfaction.
            </p>
          </div>
          <div>
            <h3>Do you offer custom solutions?</h3>
            <p>
              Yes! We pride ourselves on delivering tailored solutions that fit the specific needs
              of our clients.
            </p>
          </div>
          <div>
            <h3>What support do you offer after project completion?</h3>
            <p>
              We offer ongoing maintenance, updates, and support packages to keep your product or
              service running smoothly after launch.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Service;

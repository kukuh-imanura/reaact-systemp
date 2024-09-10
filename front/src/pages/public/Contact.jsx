import React from 'react';

// Contact Form: Nama, email, pesan, dan mungkin dropdown untuk kategori pertanyaan.
// Map: Lokasi fisik dengan Google Maps embed.
// Contact Info: Alamat, telepon, email, sosial media.

const Contact = () => {
  return (
    <div>
      {/* Section: Header */}
      <header>
        <h1>Contact Us</h1>
        <p>
          If you have any questions, feel free to reach out to us through the form below or via our
          contact details.
        </p>
      </header>

      {/* Section: Contact Form */}
      <section>
        <h2>Send Us a Message</h2>
        <form>
          <div>
            <label htmlFor='name'>Full Name</label>
            <input type='text' id='name' name='name' placeholder='Enter your name' required />
          </div>

          <div>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' placeholder='Enter your email' required />
          </div>

          <div>
            <label htmlFor='subject'>Subject</label>
            <input type='text' id='subject' name='subject' placeholder='Enter the subject' />
          </div>

          <div>
            <label htmlFor='message'>Message</label>
            <textarea
              id='message'
              name='message'
              rows='5'
              placeholder='Enter your message'
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor='category'>Category</label>
            <select id='category' name='category'>
              <option value='general'>General Inquiry</option>
              <option value='support'>Support</option>
              <option value='feedback'>Feedback</option>
              <option value='business'>Business Inquiries</option>
            </select>
          </div>

          <button type='submit'>Submit</button>
        </form>
      </section>

      {/* Section: Map */}
      <section>
        <h2>Our Location</h2>
        <p>Visit us at our office or check the map below to find us.</p>
        <div>
          {/* Placeholder for Google Maps embed */}
          <iframe
            title='Google Maps'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093794!2d144.95373631540686!3d-37.81627927975132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577dfe55458f3e!2sFederation+Square!5e0!3m2!1sen!2sau!4v1552442448088'
            width='600'
            height='450'
            frameBorder='0'
            style={{ border: 0 }}
            allowFullScreen=''
          ></iframe>
        </div>
      </section>

      {/* Section: Contact Info */}
      <section>
        <h2>Contact Information</h2>
        <div>
          <p>
            <strong>Address:</strong> 123 Business Street, Suite 100, City, Country, ZIP
          </p>
          <p>
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p>
            <strong>Email:</strong> <a href='mailto:info@company.com'>info@company.com</a>
          </p>
          <p>
            <strong>Working Hours:</strong> Monday - Friday: 9:00 AM - 5:00 PM
          </p>
        </div>
      </section>

      {/* Section: Social Media Links */}
      <section>
        <h2>Follow Us</h2>
        <div>
          <ul>
            <li>
              <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
                Facebook
              </a>
            </li>
            <li>
              <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                Twitter
              </a>
            </li>
            <li>
              <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                Instagram
              </a>
            </li>
            <li>
              <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Section: Footer */}
      <footer>
        <div>
          <p>© 2024 Your Company. All Rights Reserved.</p>
          <ul>
            <li>
              <a href='/privacy-policy'>Privacy Policy</a>
            </li>
            <li>
              <a href='/terms-of-service'>Terms of Service</a>
            </li>
            <li>
              <a href='/contact'>Contact Us</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Contact;

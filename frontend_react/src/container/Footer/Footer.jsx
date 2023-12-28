import { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact', //this is coming from Sanity schema
      name: name,
      email: email,
      message: message
    }
    client.create(contact) // send data to Sanity
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }

  return (
    <section>
      <h2 className="head-text">Get in touch</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:3k2oA@example.com" className="p-text">3k2oA@example.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="email" />
          <a href="tel:654256456" className="p-text">654256456</a>
        </div>
      </div>

      {/* contact form */}
      {!isFormSubmitted ? // if the form is not submitted, show it
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your name" name="name" value={name} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your message"
              value={message}

              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{loading ? ' Sending' : 'Send Message'}</button>
        </div>
        : // but after the form is submitted, show success message
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      }
      {/* end contact form */}

    </section>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact', 'app__whitebg') //Footer
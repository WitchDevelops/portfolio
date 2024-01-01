import { useState } from 'react';
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
      <h2 className="head-text">Get <span> in touch</span></h2>
      

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
              className="p-text "
              placeholder="Your message"
              value={message}
              noresize
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{loading ? ' Sending' : 'Send Message'}</button>
        </div>
        : // but after the form is submitted, show success message
        <div>
          <h3 className="head-text">Your message was sent, thanks!</h3>
        </div>
      }
      {/* end contact form */}

    </section>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact', 'app__whitebg') //Footer
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss'

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const contactSchema = z.object({
    from_name: z.string().min(2, "Name must be at least 2 characters"),
    from_email: z.string().email("Invalid email address"),
    message: z.string().min(5, "Message cannot be empty"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const sendEmail = (data) => {
    setLoading(true);
    emailjs
      .send("service_2hemfqc", "template_iykwa3r", data, "ZlnCVD6mjEy0Wdd3R")
      .then(() => { setLoading(false); setIsFormSubmitted(true) })
      .catch((err) => alert("Error sending email: " + err.text));
  };

  return (
    <section className="app__footer">
      <h2 className="head-text">Get <span> in touch</span></h2>

      {!isFormSubmitted ?
        <form className="app__footer-form app__flex" name="contact" onSubmit={handleSubmit(sendEmail)}>

          <div className="form-label">
            <label htmlFor="name">Name</label>
            {errors.from_name && (
              <p className="form-error">{errors.from_name.message}</p>
            )}
          </div>

          <div className="app__flex form-field">
            <input className="p-text" type="text" placeholder="Your name" {...register("from_name")} />
          </div>

          <div className="form-label">
            <label htmlFor="email">Email</label>
            {errors.from_email && (
              <p className="form-error">{errors.from_email.message}</p>
            )}
          </div>

          <div className="app__flex form-field">
            <input className="p-text" type="email" placeholder="Your email" name="from_email" {...register("from_email")} />
          </div>

          <div className="form-label">
            <label>Message</label>
            {errors.message && (
              <p className="form-error">{errors.message.message}</p>
            )}
          </div>


          <div className="app__flex form-field">
            <textarea
              className="p-text "
              placeholder="Your message"
              name="message"
              {...register("message")}
            />
          </div>
          <button type="submit" className="btn-submit p-text">{loading ? ' Sending' : 'Send Message'}</button>
        </form>
        :
        <div className="app__footer-form">
          <h3 className="head-text">Your message was sent, thanks!</h3>
        </div>
      }
    </section>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact', 'app__whitebg')
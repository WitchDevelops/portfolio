import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { AppWrap, MotionWrap } from '../../wrapper';
import { Button } from '../../components/buttons/Button';
import './Footer.scss'

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const contactSchema = z.object({
    from_name: z.string().min(2, "Name must be at least 2 characters"),
    from_email: z.string().email("Invalid email address"),
    message: z.string().min(1, "Message cannot be empty").min(5, "Your message is awfully short, write something more"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const sendEmail = async (data) => {
    try {
      setLoading(true);
      await emailjs.send("service_2hemfqc", "template_iykwa3r", data, "ZlnCVD6mjEy0Wdd3R");
      setIsFormSubmitted(true);
    } catch (error) {
      console.error("Email sending error:", error);
      alert("Failed to send the message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="app__footer">
      <h2 className="head-text">Get <span> in touch</span></h2>

      {!isFormSubmitted ?
        <form className="app__footer-form app__flex" name="contact" onSubmit={handleSubmit(sendEmail)}>

          <div className="form-label">
            <label htmlFor="from_name">Name</label>
            {errors.from_name && (
              <p className="form-error" aria-live="polite">{errors.from_name.message}</p>
            )}
          </div>

          <div className="app__flex form-field">
            <input className="p-text" type="text" placeholder="Your name" {...register("from_name")} />
          </div>

          <div className="form-label">
            <label htmlFor="from_email">Email</label>
            {errors.from_email && (
              <p className="form-error" aria-live="polite">{errors.from_email.message}</p>
            )}
          </div>

          <div className="app__flex form-field">
            <input className="p-text" type="email" placeholder="Your email" name="from_email" {...register("from_email")} />
          </div>

          <div className="form-label">
            <label htmlFor='message'>Message</label>
            {errors.message && (
              <p className="form-error" aria-live="polite">{errors.message.message}</p>
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
          <Button type="submit" disabled={loading} className="p-text">
            {loading ? "Sending..." : "Send Message"}
          </Button>
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
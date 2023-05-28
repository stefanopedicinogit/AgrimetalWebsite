import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
        name,
        email,
        subject,
        message,
      });

    // emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, e.target, process.env.NEXT_PUBLIC_EMAILJS_SECRET_KEY
    // )

    emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,{
        email: email,
        name: name,
        subject: subject,
        message: message,
        }, process.env.NEXT_PUBLIC_EMAILJS_SECRET_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }
  
  return (
    <>
      <Header className="mb-5" />
  
      <div className="container-fluid bg-primary py-5 bg-hero mt-5">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="display-1 text-white mb-md-4">Contact Us</h1>
              <a href="" className="btn btn-primary py-md-3 px-md-5 me-3">Home</a>
              <a href="" className="btn btn-secondary py-md-3 px-md-5">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
  
      {/* <!-- Contact Start --> */}
  
      <div className="pt-5 container-fluid py-5">
        <div className="container">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: '500px' }}>
            <h6 className="text-primary text-uppercase">Contact Us</h6>
            <h1 className="display-5">Feel free to contact us.</h1>
          </div>
          <div className="row g-0">
            <div className="col-lg-7">
              <div className="bg-primary h-100 p-5">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-6">
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        id="name"
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control bg-light border-0 px-4"
                        placeholder="name"
                        style={{ height: '55px' }} />
                    </div>
                    <div className="col-6">
                      <label htmlFor="email">Email:</label>
  
                      <input
                        type="email"
                        id="email"
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control bg-light border-0 px-4"
                        placeholder="email"
                        style={{ height: '55px' }} />
                    </div>
                    <div className="col-12">
                      <label htmlFor="subject">Subject:</label>
                      <input type="text"
                        id="subject"
                        name='subject'
                        value={subject} 
                        onChange={(e) => setSubject(e.target.value)}
                        className="form-control bg-light border-0 px-4"
                        placeholder="subject"
                        style={{ height: '55px' }} />
                    </div>
                    <div className="col-12">
                      <label htmlFor="message">Message:</label>
                      <textarea
                        id="message"
                        name='message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="form-control bg-light border-0 px-4 py-3"
                        rows="2"
                        placeholder="message"></textarea>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-secondary w-100 py-3" type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="bg-secondary h-100 p-5">
                <h2 className="text-white mb-4">Get In Touch</h2>
                <div className="d-flex mb-4">
                  <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                    <i                   className="bi bi-geo-alt fs-4"></i>
                </div>
                <div className="ms-3">
                  <h6 className="text-white">Address</h6>
                  <p className="m-0 text-muted">1234 Street, City, State 12345</p>
                </div>
              </div>
              <div className="d-flex mb-4">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                  <i className="bi bi-phone fs-4"></i>
                </div>
                <div className="ms-3">
                  <h6 className="text-white">Phone</h6>
                  <p className="m-0 text-muted">+1 123-456-7890</p>
                </div>
              </div>
              <div className="d-flex mb-4">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                  <i className="bi bi-envelope fs-4"></i>
                </div>
                <div className="ms-3">
                  <h6 className="text-white">Email</h6>
                  <p className="m-0 text-muted">example@example.com</p>
                </div>
              </div>
              <div className="mt-5">
                <h2 className="text-white mb-4">Follow Us</h2>
                <div className="d-flex">
                  <a href="" className="btn btn-primary me-3"><i className="bi bi-facebook"></i></a>
                  <a href="" className="btn btn-primary me-3"><i className="bi bi-twitter"></i></a>
                  <a href="" className="btn btn-primary me-3"><i className="bi bi-instagram"></i></a>
                  <a href="" className="btn btn-primary"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
}

export default Contact;
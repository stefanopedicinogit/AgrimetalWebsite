import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();

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


    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID_FORM, form.current, process.env.REACT_APP_EMAILJS_SECRET_KEY)
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
      <div className="container-fluid bg-primary py-5 bg-hero mt-5">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="display-1 text-white mb-md-4">Contattaci</h1>
              <a href="" className="btn btn-primary py-md-3 px-md-5 me-3">Home</a>
              <a href="" className="btn btn-secondary py-md-3 px-md-5">Contatti</a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Contact Start --> */}

      <div className="pt-5 container-fluid py-5">
        <div className="container">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: '500px' }}>
            <h6 className="text-primary text-uppercase">Contattaci</h6>
            <h1 className="display-5">Sentiti libero di contattarci tramite il form.</h1>
          </div>
          <div className="row g-0">
            <div className="col-lg-7">
              <div className="bg-primary h-100 p-5">
                <form ref={form} onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-6 text-white">
                      <label htmlFor="name">Nome e Cognome:</label>
                      <input
                        type="text"
                        id="name"
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control bg-light border-0 px-4"
                        placeholder="Nome e Cognome"
                        style={{ height: '55px' }} />
                    </div>
                    <div className="col-6 text-white">
                      <label htmlFor="email">Email:</label>

                      <input
                        type="email"
                        id="email"
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control bg-light border-0 px-4"
                        placeholder="Email"
                        style={{ height: '55px' }} />
                    </div>
                    <div className="col-12 text-white">
                      <label htmlFor="subject">Oggetto:</label>
                      <input type="text"
                        id="subject"
                        name='subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="form-control bg-light border-0 px-4"
                        placeholder="Oggetto"
                        style={{ height: '55px' }} />
                    </div>
                    <div className="col-12 text-white">
                      <label htmlFor="message">Messaggio:</label>
                      <textarea
                        id="message"
                        name='message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="form-control bg-light border-0 px-4 py-3"
                        rows="2"
                        placeholder="Messaggio">
                      </textarea>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-secondary w-100 py-3" type="submit">Invia</button>
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
                    <i className="bi bi-geo-alt fs-4 text-white"></i>
                  </div>
                  <div className="ms-3">
                    <h6 className="text-white">Indirizzo</h6>
                    <p className="m-0 text-muted">Sciacca, Viale Siena n 23 (AG) 92019, Italia</p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                    <i className="bi bi-phone fs-4 text-white"></i>
                  </div>
                  <div className="ms-3">
                    <h6 className="text-white">Telefono</h6>
                    <p className="m-0 text-muted">+39 3891988337</p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                    <i className="bi bi-envelope fs-4 text-white"></i>
                  </div>
                  <div className="ms-3">
                    <h6 className="text-white">Email</h6>
                    <p className="m-0 text-muted">agrimetal@outlook.it</p>
                  </div>
                </div>
                <div className="mt-5">
                  <h2 className="text-white mb-4">Follow Us</h2>
                  <div className="d-flex">
                    <a href="/contact" className="btn btn-primary me-3"><i className="fas fa-envelope"></i></a>
                    <a href="https://www.facebook.com/AGRIMETAL21" className="btn btn-primary me-3"><i className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/agrimetal_/?igshid=NTc4MTIwNjQ2YQ%3D%3D" className="btn btn-primary me-3"><i className="bi bi-instagram"></i></a>
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
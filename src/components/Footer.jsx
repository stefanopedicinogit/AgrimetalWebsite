import React from 'react';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const Footer = () => {
    const [telefono, setTelefono] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(telefono)
        emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID_TEL, {
          telefono: telefono,
        }, process.env.REACT_APP_EMAILJS_SECRET_KEY)
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });
      
        setTelefono('');
      }

    return (
        // <!-- Footer Start -->
        <>
            <div className="container-fluid bg-footer bg-primary text-white mt-5">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-8 col-md-6">
                            <div className="row gx-5">
                                <div className="col-lg-6 col-md-12 pt-5 mb-5">
                                    <h4 className="text-white mb-4">Contatti</h4>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-geo-alt text-white me-2"></i>
                                        <p className="text-white mb-0">Sciacca, Viale Siena n 23 (AG) 92019, Italia</p>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-envelope-open text-white me-2"></i>
                                        <p className="text-white mb-0">agrimetal@outlook.it</p>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-telephone text-white me-2"></i>
                                        <p className="text-white mb-0">+39 3891988337</p>
                                    </div>
                                    <div className="d-flex mt-4">
                                        <a className="btn btn-secondary btn-square rounded-circle me-2" href="/contact"><i className="fas fa-envelope"></i></a>
                                        <a className="btn btn-secondary btn-square rounded-circle me-2" href="https://www.facebook.com/AGRIMETAL21"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-secondary btn-square rounded-circle" href="https://www.instagram.com/agrimetal_/?igshid=NTc4MTIwNjQ2YQ%3D%3D"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <h4 className="text-white mb-4">Quick Links</h4>
                                    <div className="d-flex flex-column justify-content-start">
                                        <a className="text-white mb-2" href="/"><i className="bi bi-arrow-right text-white me-2"></i>Home</a>
                                        <a className="text-white mb-2" href="/about"><i className="bi bi-arrow-right text-white me-2"></i>About Us</a>
                                        <a className="text-white mb-2" href="/gallery"><i className="bi bi-arrow-right text-white me-2"></i>Gallery</a>
                                        <a className="text-white" href="/contact"><i className="bi bi-arrow-right text-white me-2"></i>Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-lg-n5">
                            <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-secondary p-5">
                                <h4 className="text-white">Fatti chiamare</h4>
                                <p>Inserisci il tuo numero di telefono ti richiameremo appena possibile.</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="input-group">
                                    <input
                                        type="text"
                                        id="telefono"
                                        name='telefono'
                                        value={telefono}
                                        onChange={(e) => setTelefono(e.target.value)}
                                        className="form-control border-white p-3"
                                        placeholder="Il tuo numero qui."
                                        style={{ height: '55px' }} />
                                        <button className="btn btn-primary">Invia</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-white py-4">
                <div className="container text-center">
                    <p className="mb-0">&copy; <a className="text-secondary fw-bold" href="#">Agrimetal</a>. All Rights Reserved. Founded by <a className="text-secondary fw-bold">Stefano Belli</a></p>
                    <br />Responsive site created by: <a className="text-secondary fw-bold" href="https://it.linkedin.com/in/stefano-pedicino" target="_blank">Stefano Pedicino</a>
                </div>
            </div>
            {/* <!-- Footer End -->   */}
        </>)
}

export default Footer
import Footer from '../components/Footer';
import SlideGallery from '../components/SlideGallery'
import React, { useState, useEffect } from 'react';

const HomePage = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const list = [];

        for (let i = 0; i < 14; i++) {
          list.push({
            imageUrl: `/foto/${i}.jpg`,
            caption: `${i}.jpg`
          });
        }
        
        console.log(list);
        setImages(list);
      }, []);
      
    return (
        // <!-- Carousel Start -->
        <>
            <div className="container-fluid p-0 mt-5">
                <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="stef-img/slide1.jpg" alt="Image" />
                            <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                                <div className="text-start p-5" style={{ maxWidth: '900px' }}>
                                    <img className="display-1 text-white mb-md-4" width="100%" height="100%" src="stef-img/agrimetal-no-bg.png"></img>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="stef-img/slide1.jpg" alt="Image" />
                            <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                                <div className="text-start p-5" style={{ maxWidth: '900px' }}>
                                    <img className="display-1 text-white mb-md-4" width="100%" height="100%" src="stef-img/agrimetal-no-bg.png"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* <!-- Carousel End --> */}


            {/* <!-- Banner Start --> */}
            <div className="container-fluid banner mb-5">
                <div className="container">
                    <div className="row gx-0">
                        <div className="col-md-6">
                            <div className="bg-primary d-flex flex-column justify-content-center p-5" style={{ height: '300px' }}>
                                <h3 className="text-white mb-3">Gallery</h3>
                                <p className="text-white">Consulta la nostra foto gallery e scopri i nostri lavori..</p>
                                <a className="text-white fw-bold" href="">Guarda le foto..<i className="bi bi-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="bg-secondary d-flex flex-column justify-content-center p-5" style={{ height: '300px' }}>
                                <h3 className="text-white mb-3">Ottieni un preventivo</h3>
                                <p className="text-white">Scrivici per ottenere un preventivo personalizzato.</p>
                                <a className="text-white fw-bold" href="">Form Contattaci..<i className="bi bi-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Banner Start --> */}


            {/* <!-- About Start --> */}
            <div className="container-fluid about pt-5">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="d-flex h-100 border border-5 border-primary border-bottom-0 pt-4">
                                <img style={{marginTop:'-4%'}} className="img-fluid mx-auto" src="stef-img/ste.jpg" alt="owner" />
                            </div>
                        </div>
                        <div className="col-lg-6 pb-5">
                            <div className="mb-3 pb-2">
                                <h6 className="text-primary text-uppercase">CHI SIAMO</h6>
                                <h1 className="display-6">Costruiamo e Ripariamo Attrezzature Agricole di Qualità</h1>
                            </div>
                            <p className="mb-4">Siamo un'azienda specializzata nella costruzione e riparazione di attrezzature agricole di alta qualità. La nostra esperienza, la nostra passione e la nostra attenzione ai dettagli ci permettono di offrire soluzioni personalizzate e affidabili per soddisfare le esigenze dei nostri clienti.</p>
                            <div className="row gx-5 gy-4">
                                <div className="col-sm-6">
                                <i className="fa fa-award display-1 text-secondary"></i>
                                    <h4>Costruzioni di Qualità</h4>
                                    <p className="mb-0">Realizziamo attrezzature agricole di alta qualità, progettate per durare nel tempo e garantire prestazioni impeccabili in ogni situazione. Utilizziamo materiali resistenti e tecnologie all'avanguardia per realizzare prodotti robusti e affidabili.</p>
                                </div>
                                <div className="col-sm-6">
                                    <i className="fas fa-wrench display-1 text-secondary"></i>
                                    <h4>Assistenza Tecnica</h4>
                                    <p className="mb-0">Offriamo anche servizi di riparazione e manutenzione per garantire il massimo delle prestazioni delle attrezzature agricole dei nostri clienti. Il nostro team è in grado di fornire assistenza tecnica su ogni tipo di attrezzatura agricola, con rapidità ed efficienza.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}


            {/* <!-- Facts Start --> */}
            <div className="container-fluid bg-primary facts py-5 mb-5">
                <div className="container py-5 d-flex flex-column align-items-center justify-content-center">
                <a href="/about" className="btn btn-secondary py-md-3 px-md-5">Scopri di più..</a>

                    {/* <div className="row gx-5 gy-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex">
                                <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-star fs-4 text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-white">Our Experience</h5>
                                    <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex">
                                <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-users fs-4 text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-white">Farm Specialist</h5>
                                    <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex">
                                <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-check fs-4 text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-white">Complete Project</h5>
                                    <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex">
                                <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-mug-hot fs-4 text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-white">Happy Clients</h5>
                                    <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                                </div>
                            </div>
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
            {/* <!-- Facts End --> */}


            {/* <!-- Services Start --> */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6">
                            <div className="mb-3">
                                <h6 className="text-primary text-uppercase">Servizi</h6>
                                <h1 className="display-5">I nostri servizi.</h1>
                            </div>
                            <p className="mb-4">Offriamo una vasta gamma di servizi per aiutare gli agricoltori a lavorare in modo più efficiente e produttivo.</p>
                            <a href="/contact" className="btn btn-primary py-md-3 px-md-5">Contattaci</a>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item bg-light text-center p-5">
                                <i className="fas fa-hard-hat display-1 text-primary mb-3"></i>
                                <h4>Costruzione</h4>
                                <p className="mb-0">Costruiamo attrezzature agricole a seguito di un attenta progettazione e utilizziamo i migliori materiali per garantire la funzionalità e la durata nel tempo.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item bg-light text-center p-5">
                                <i className="fas fa-tools display-1 text-primary mb-3"></i>
                                <h4>Riparazione</h4>
                                <p className="mb-0">Ripariamo e verniciamo le tue attrezzature agricole danneggiate. Diagnostichiamo e risolviamo problemi meccanici, idraulici ed ellettrici delle tue macchine.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item bg-light text-center p-5">
                                <i className="fa fa-seedling display-1 text-primary mb-3"></i>
                                <h4>Materiali non tossici ed Ecosostenibili</h4>
                                <p className="mb-0">Scegliendo solo materiali ecologici e non tossici, siamo in grado di offrire ai nostri clienti prodotti sostenibili, riducendo l'impatto ambientale e promuovendo uno stile di vita più sano.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item bg-light text-center p-5">
                                <i className="fas fa-stopwatch display-1 text-primary mb-3"></i>
                                <h4>Celerità</h4>
                                <p className="mb-0">Siamo in grado di rispondere alle richieste dei nostri clienti in modo tempestivo e di offrire un servizio affidabile.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item bg-light text-center p-5">
                                <i className="fas fa-headset display-1 text-primary mb-3"></i>
                                <h4>Pronta assistenza</h4>
                                <p className="mb-0">Siamo sempre pronti ad assistere i nostri clienti in caso di problemi o necessità, fornendo risposte tempestive e soluzioni efficaci ad ogni vostra problematica.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Services End --> */}


            {/* <!-- Features Start --> */}
            <div className="container-fluid bg-primary feature py-5 pb-lg-0 my-5">
                <div className="container py-5 pb-lg-0">
                    <div className="mx-auto text-center mb-3 pb-2" style={{ maxWidth: '500px' }}>
                        <h6 className="text-uppercase text-secondary">Features</h6>
                        <h1 className="display-5 text-white">Perchè sceglierci</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-3">
                            <div className="text-white mb-5">
                                <div className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-seedling fs-4 text-white"></i>
                                </div>
                                <h4 className="text-white">Vasta Gamma</h4>
                                <p className="mb-0">Offriamo un ampia gamma di prodotti, tra cui trincia erba a catena, strasciaca, raccogli legna, vibro coltivatori, aratri, cassoni ad attacco 3 punti, archi di sollevamento 3 punti per cingolati e molti altri tipi di attrezzi agricoli..</p>
                            </div>
                            <div className="text-white">
                                <div className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-award fs-4 text-white"></i>
                                </div>
                                <h4 className="text-white">Materiali di Qualità</h4>
                                <p className="mb-0">Utilizzando solo materiali di alta qualità, offriamo ai nostri clienti prodotti affidabili e resistenti nel tempo.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-block bg-white h-100 text-center p-5 pb-lg-0">
                                <p>Scegliere la nostra azienda per i tuoi impianti agricoli significa affidarti a un team esperto, costantemente aggiornato sulle nuove tecnologie e metodologie del settore. Utilizziamo solo i migliori materiali e attrezzature per garantirti risultati di alta qualità. Inoltre, ci preoccupiamo sempre di fornire un servizio personalizzato e attento alle tue esigenze specifiche, assicurandoci di trovare la soluzione migliore per te. Con noi, avrai la sicurezza di avere un partner affidabile e competente al tuo fianco.</p>
                                <img className="img-fluid" src="stef-img/macchine-agricole-02.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="text-white mb-5">
                                <div className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-tractor fs-4 text-white"></i>
                                </div>
                                <h4 className="text-white">Design Moderno</h4>
                                <p className="mb-0">Offriamo prodotti innovativi e all'avanguardia, che rispondono alle tendenze di mercato e che siano esteticamente piacevoli.</p>
                            </div>
                            <div className="text-white">
                                <div className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-phone-alt fs-4 text-white"></i>
                                </div>
                                <h4 className="text-white">Disponibilità per supporto e manutenzione</h4>
                                <p className="mb-0">Siamo sempre disponibili a fornirvi assistenza per qualsiasi problematica e a risolvere i vostri problemi in maniera tempestiva.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Features Start --> */}

            <div className="container-fluid py-5">
                <div className="container">
                    <h6 className="text-primary text-uppercase">Gallery</h6>
                    <h1 className="display-5">I nostri lavori.<br/>
                    <br/></h1>
                    {/* <div className="pb-5">
                        <div className="product-item position-relative bg-white d-flex flex-column text-center">
                            <img className="img-fluid mb-4" src="img/product-1.png" alt="" />
                            <h6 className="mb-3">Organic Vegetable</h6>
                            <h5 className="text-primary mb-0">$19.00</h5>
                            <div className="btn-action d-flex justify-content-center">
                                <a className="btn bg-primary py-2 px-3" href=""><i className="bi bi-cart text-white"></i></a>
                                <a className="btn bg-secondary py-2 px-3" href=""><i className="bi bi-eye text-white"></i></a>
                            </div>
                        </div>
                    </div> */}
                    <SlideGallery
                        slides={images.map((image, index) => ({
                            imageUrl: `/foto/${index}.jpg`,
                            caption: image.caption,
                        }))}
                        />
                </div>
            </div>
            {/* <!-- Products Start --> */}
            {/* <div className="container-fluid py-5">
                <div className="container">
                    <h6 className="text-primary text-uppercase">Products</h6>
                    <h1 className="display-5">Our Fresh & Organic Products</h1>
                    <div className="mx-auto text-center mb-5" style={{ maxWidth: '500px' }}>
                    </div>
                    <div className="owl-carousel product-carousel px-5">
                        <div className="pb-5">
                            <div className="product-item position-relative bg-white d-flex flex-column text-center">
                                <img className="img-fluid mb-4" src="img/product-1.png" alt="" />
                                <h6 className="mb-3">Organic Vegetable</h6>
                                <h5 className="text-primary mb-0">$19.00</h5>
                                <div className="btn-action d-flex justify-content-center">
                                    <a className="btn bg-primary py-2 px-3" href=""><i className="bi bi-cart text-white"></i></a>
                                    <a className="btn bg-secondary py-2 px-3" href=""><i className="bi bi-eye text-white"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="pb-5">
                            <div className="product-item position-relative bg-white d-flex flex-column text-center">
                                <img className="img-fluid mb-4" src="img/product-2.png" alt="" />
                                <h6 className="mb-3">Organic Vegetable</h6>
                                <h5 className="text-primary mb-0">$19.00</h5>
                                <div className="btn-action d-flex justify-content-center">
                                    <a className="btn bg-primary py-2 px-3" href=""><i className="bi bi-cart text-white"></i></a>
                                    <a className="btn bg-secondary py-2 px-3" href=""><i className="bi bi-eye text-white"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="pb-5">
                            <div className="product-item position-relative bg-white d-flex flex-column text-center">
                                <img className="img-fluid mb-4" src="img/product-1.png" alt="" />
                                <h6 className="mb-3">Organic Vegetable</h6>
                                <h5 className="text-primary mb-0">$19.00</h5>
                                <div className="btn-action d-flex justify-content-center">
                                    <a className="btn bg-primary py-2 px-3" href=""><i className="bi bi-cart text-white"></i></a>
                                    <a className="btn bg-secondary py-2 px-3" href=""><i className="bi bi-eye text-white"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="pb-5">
                            <div className="product-item position-relative bg-white d-flex flex-column text-center">
                                <img className="img-fluid mb-4" src="img/product-2.png" alt="" />
                                <h6 className="mb-3">Organic Vegetable</h6>
                                <h5 className="text-primary mb-0">$19.00</h5>
                                <div className="btn-action d-flex justify-content-center">
                                    <a className="btn bg-primary py-2 px-3" href=""><i className="bi bi-cart text-white"></i></a>
                                    <a className="btn bg-secondary py-2 px-3" href=""><i className="bi bi-eye text-white"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="pb-5">
                            <div className="product-item position-relative bg-white d-flex flex-column text-center">
                                <img className="img-fluid mb-4" src="img/product-1.png" alt="" />
                                <h6 className="mb-3">Organic Vegetable</h6>
                                <h5 className="text-primary mb-0">$19.00</h5>
                                <div className="btn-action d-flex justify-content-center">
                                    <a className="btn bg-primary py-2 px-3" href=""><i className="bi bi-cart text-white"></i></a>
                                    <a className="btn bg-secondary py-2 px-3" href=""><i className="bi bi-eye text-white"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <!-- Products End --> */}


            {/* <!-- Testimonial Start --> */}
            {/* <div className="container-fluid bg-testimonial py-5 my-5">
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="owl-carousel testimonial-carousel p-5">
                        <div className="testimonial-item text-center text-white">
                            <img className="img-fluid mx-auto p-2 border border-5 border-secondary rounded-circle mb-4" src="img/testimonial-2.jpg" alt=""/>
                            <p className="fs-5">Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.</p>
                            <hr className="mx-auto w-25"/>
                            <h4 className="text-white mb-0">Client Name</h4>
                        </div>
                        <div className="testimonial-item text-center text-white">
                            <img className="img-fluid mx-auto p-2 border border-5 border-secondary rounded-circle mb-4" src="img/testimonial-2.jpg" alt=""/>
                            <p className="fs-5">Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.</p>
                            <hr className="mx-auto w-25"/>
                            <h4 className="text-white mb-0">Client Name</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  */}

            {/* <!-- Testimonial End --> */}


            {/* <!-- Team Start --> */}
            {/* <div className="container-fluid py-5">
                <div className="container">
                    <div className="mx-auto text-center mb-5" style={{ maxWidth: '500px' }}>
                        <h6 className="text-primary text-uppercase">The Team</h6>
                        <h1 className="display-5">We Are Professional Organic Farmers</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6">
                            <div className="row g-0">
                                <div className="col-10">
                                    <div className="position-relative">
                                        <img className="img-fluid w-100" src="img/team-1.jpg" alt="" />
                                        <div className="position-absolute start-0 bottom-0 w-100 py-3 px-4" style={{ background: 'rgba(52, 173, 84, .85)' }}>
                                            <h4 className="text-white">Farmer Name</h4>
                                            <span className="text-white">Designation</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                                        <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-twitter text-secondary"></i></a>
                                        <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-facebook-f text-secondary"></i></a>
                                        <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-linkedin-in text-secondary"></i></a>
                                        <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-instagram text-secondary"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="row g-0">
                                <div className="col-10">
                                    <div className="position-relative">
                                        <img className="img-fluid w-100" src="img/team-2.jpg" alt="" />
                                        <div className="position-absolute start-0 bottom-0 w-100 py-3 px-4" style={{ background: 'rgba(52, 173, 84, .85)' }}>
                                            <h4 className="text-white">Farmer Name</h4>
                                            <span className="text-white">Designation</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                                        <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-twitter text-secondary"></i></a>
                                        <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-facebook-f text-secondary"></i></a>
                                        <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-linkedin-in text-secondary"></i></a>
                                        <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-instagram text-secondary"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="row g-0">
                                <div className="col-10">
                                    <div className="position-relative">
                                        <img className="img-fluid w-100" src="img/team-3.jpg" alt="" />
                                        <div className="position-absolute start-0 bottom-0 w-100 py-3 px-4" style={{ background: 'rgba(52, 173, 84, .85)' }}>
                                            <h4 className="text-white">Farmer Name</h4>
                                            <span className="text-white">Designation</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                                        <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-twitter text-secondary"></i></a>
                                        <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-facebook-f text-secondary"></i></a>
                                        <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-linkedin-in text-secondary"></i></a>
                                        <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-instagram text-secondary"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- Team End --> */}


            {/* <!-- Blog Start --> */}
            {/* <div className="container-fluid py-5">
                <div className="container">
                    <h6 className="text-primary text-uppercase">Our Blog</h6>
                    <h1 className="display-5">Latest Articles From Our Blog Post</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4">
                        <div className="blog-item position-relative overflow-hidden">
                            <img className="img-fluid" src="img/blog-1.jpg" alt="" />
                            <a className="blog-overlay" href="">
                                <h4 className="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                                <span className="text-white fw-bold">Jan 01, 2050</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-item position-relative overflow-hidden">
                            <img className="img-fluid" src="img/blog-2.jpg" alt="" />
                            <a className="blog-overlay" href="">
                                <h4 className="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                                <span className="text-white fw-bold">Jan 01, 2050</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-item position-relative overflow-hidden">
                            <img className="img-fluid" src="img/blog-3.jpg" alt="" />
                            <a className="blog-overlay" href="">
                                <h4 className="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                                <span className="text-white fw-bold">Jan 01, 2050</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- Blog End -->   */}
            <Footer></Footer>
        </>
    )
}

export default HomePage
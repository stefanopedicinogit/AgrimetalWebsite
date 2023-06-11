import React from 'react'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
    {/* <!-- Hero Start --> */}
    <div className="container-fluid bg-primary py-5 bg-hero mb-5">
        <div className="container py-5">
            <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h1 className="display-1 text-white mb-md-4">About Us</h1>
                    <a href="" className="btn btn-primary py-md-3 px-md-5 me-3">Home</a>
                    <a href="" className="btn btn-secondary py-md-3 px-md-5">About Us</a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Hero End --> */}


    {/* <!-- About Start --> */}
    <div className="container-fluid about pt-5" style={{marginBottom: '-90px'}}>
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <div className="d-flex h-100 border border-5 border-primary border-bottom-0 pt-4">
                        <img style={{marginTop:'-4%'}} className="img-fluid mx-auto" src="stef-img/ste.jpg"/>
                    </div>
                </div>
                <div className="col-lg-6 pb-5">
                    <div className="mb-3 pb-2">
                        <h6 className="text-primary text-uppercase">CHI SIAMO</h6>
                        <h1 className="display-6">Costruiamo e Ripariamo Attrezzature Agricole di Qualità</h1>
                    </div>
                    <p className="mb-4">Le attrezzature agricole di alta qualità sono progettate e costruite per garantire 
    prestazioni impeccabili in ogni situazione. Sono realizzate utilizzando materiali resistenti 
    e tecnologie all'avanguardia per garantire la massima efficienza e durata nel tempo. <br/>
    Queste attrezzature sono progettate con precisione per adattarsi alle esigenze specifiche di ogni coltivatore, 
    offrendo soluzioni personalizzate e affidabili. Grazie alla loro qualità e affidabilità, le attrezzature agricole di 
    alta qualità rappresentano un investimento saggio e duraturo per chi lavora nel settore agricolo.  <br/><br/>

    Ci sono diversi motivi per cui le attrezzature agricole di alta qualità sono importanti per il settore agricolo. In primo luogo, queste attrezzature sono progettate e costruite per funzionare in modo efficiente e affidabile, offrendo prestazioni costanti e riducendo al minimo i tempi di inattività. Ciò significa che i coltivatori 
    possono lavorare in modo più produttivo e raggiungere risultati migliori. <br/><br/>

    Inoltre, le attrezzature agricole di alta qualità sono solitamente costruite con materiali resistenti e tecnologie 
    all'avanguardia, il che significa che durano più a lungo e richiedono meno manutenzione rispetto alle attrezzature di bassa 
    qualità. Questo significa che i coltivatori possono risparmiare tempo e denaro sulla manutenzione e la sostituzione delle 
    attrezzature. <br/><br/>

    Infine, le attrezzature agricole di alta qualità sono progettate per adattarsi alle esigenze specifiche di ogni coltivatore, 
    offrendo soluzioni personalizzate che si adattano alle loro esigenze e alle loro pratiche agricole. Ciò significa che i 
    coltivatori possono lavorare in modo più efficiente e personalizzato, ottenendo i migliori risultati possibili. <br/><br/>

    NON PERDERE ULTERIORE TEMPO E RICHIEDI UN PREVENTIVO AI NOSTRI ESPERTI ATTRAVERSO L'AREA CONTATTI.</p>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}
    <Footer></Footer>
    </>
  )
}

export default About
import React from 'react'
import { FileText } from 'lucide-react'
import '../PageLayout.css'
import './Membership.css'

const Membership = () => {
    return (
        <div className="membership-page">
            <div className="page-hero" style={{ '--page-color': 'var(--membership)' }}>
                <div className="container">
                    <h1 className="section-title">TESSERAMENTO</h1>
                    <p className="intro-text">
                        Qui potrete scaricare il PDF del modulo di Tesseramento al NOI Oratorio del Bondone.
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="membership-content">

                    {/* Benefits Section */}
                    <div className="benefits-section">
                        <h2>PERCHÉ TESSERARSI?</h2>
                        <div className="benefits-grid">
                            <div className="benefit-card">
                                <h3>assicurazione</h3>
                                <p>Copertura assicurativa durante tutte le attività organizzate dall'oratorio.</p>
                            </div>
                            {/* <div className="benefit-card">
                                <h3>agevolazioni</h3>
                                <p>Prezzi vantaggiosi per le gite, i campi estivi e tutte le proposte dell'oratorio.</p>
                            </div> */}
                            <div className="benefit-card">
                                <h3>sostegno</h3>
                                <p>Contribuisci concretamente alle spese di gestione e alle iniziative per i ragazzi.</p>
                            </div>
                        </div>
                    </div>

                    {/* Download Section */}
                    <div className="download-block">
                        <div className="download-text">
                            <p>
                                Una volta scaricato e stampato, compilalo in tutte le sue voci
                                e consegnalo nei momenti dedicati.
                            </p>
                            <strong>NB: la quota associativa è di 10€</strong>
                        </div>

                        <a
                            href="/media/modulo_tesseramento_26.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-membership-large"
                        >
                            <FileText size={24} />
                            Tesseramento
                        </a>
                    </div>

                    {/* Instructions Section */}
                    <div className="instructions-section">
                        <img
                            src="/images/Istruzione_Tesseramento.png"
                            alt="Istruzioni Tesseramento"
                            className="instructions-image"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Membership

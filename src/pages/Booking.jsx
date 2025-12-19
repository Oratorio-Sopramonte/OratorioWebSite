import React from 'react'
import Carousel from '../components/Carousel'
import { FileText, Mail } from 'lucide-react'
import '../PageLayout.css'
import './Booking.css'

const Booking = () => {

    const imagesSalaGiochi = [
        '/images/sala_giochi/image_1.png',
        '/images/sala_giochi/image_2.png',
        '/images/sala_giochi/image_3.png'
    ]

    const imagesSalaPolivalente = [
        '/images/sala_polivalente/image_1.png',
        '/images/sala_polivalente/image_2.png',
        '/images/sala_polivalente/image_3.png'
    ]

    return (
        <div className="booking-page">
            <div className="page-hero" style={{ '--page-color': 'var(--booking)' }}>
                <div className="container">
                    <h1 className="section-title">PRENOTA SALE</h1>
                    <p className="intro-text">
                        L’associazione mette a disposizione le due sale dell’oratorio all’intera comunità.
                        Qui potrete trovare una galleria delle due sale.
                    </p>
                </div>
            </div>

            <div className="container">

                <div className="rooms-grid">
                    {/* Card Sala Giochi */}
                    <div className="room-card">
                        <div className="card-media">
                            <Carousel images={imagesSalaGiochi} height="250px" />
                            <span className="card-badge svago">SVAGO</span>
                        </div>
                        <div className="card-content">
                            <h2>SALA GIOCHI 🏓</h2>
                            <p className="card-description">
                                La sala giochi è fornita di vari giochi come calcetti e tavoli da ping-pong.
                                Ideale per momenti di convivialità. Accesso diretto al bagno e alla cucina.
                            </p>

                            <div className="card-tags">
                                <span className="tag">⚽ Calcetto</span>
                                <span className="tag">🍺 Cucina</span>
                                <span className="tag">🚻 Bagno</span>
                            </div>
                        </div>
                    </div>

                    {/* Card Sala Polivalente */}
                    <div className="room-card">
                        <div className="card-media">
                            <Carousel images={imagesSalaPolivalente} height="250px" />
                            <span className="card-badge eventi">EVENTI</span>
                        </div>
                        <div className="card-content">
                            <h2>SALA POLIVALENTE 🎤</h2>
                            <p className="card-description">
                                Ampio spazio vuoto provvisto di impianto audio con microfono e videoproiettore.
                                Ideale per conferenze, feste e riunioni.
                            </p>

                            <div className="card-tags">
                                <span className="tag">📽️ Proiettore</span>
                                <span className="tag">👥 Capiente</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="booking-actions-section">
                    <div className="contact-box">
                        <p className="contact-label">Per richiedere una prenotazione scrivere alla email:</p>
                        <a href="mailto:prenotazionesale.oratorio@gmail.com" className="email-link-large">
                            <Mail size={24} />
                            prenotazionesale.oratorio@gmail.com
                        </a>
                    </div>

                    <div className="regulations-box">
                        <a
                            href="/media/regolamento_sale.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-warning-large"
                        >
                            <FileText size={24} />
                            Scarica Regolamento
                        </a>
                    </div>
                </div>

                <div className="general-info-section">
                    <h2 style={{ color: 'var(--booking)' }}>ALTRE INFORMAZIONI</h2>
                    <p className="info-subtitle">
                        Le sale possono anche essere prenotate insieme.
                        Sono separate da un separé rimovibile che permette di ottenere un ampio spazio unico.
                    </p>

                    <div className="planimetry-box">
                        <h3>PLANIMETRIA SPAZI</h3>
                        <img src="/images/piantina.png" alt="Planimetria" className="planimetry-image" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Booking

import React from 'react'
import { MapPin, Mail, Clock } from 'lucide-react'
import '../PageLayout.css'
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="page-hero" style={{ '--page-color': 'var(--third)' }}>
                <div className="container">
                    <h1 className="section-title">CONTATTI</h1>
                    <p className="intro-text">
                        Siamo sempre disponibili per rispondere alle tue domande e accoglierti nel nostro Oratorio.
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="contact-content">

                    <div className="contact-grid">

                        {/* Information Column */}
                        <div className="info-card">
                            <div className="info-item">
                                <div className="info-icon-box">
                                    <MapPin size={24} />
                                </div>
                                <div className="info-text">
                                    <h3>Dove Siamo</h3>
                                    <p>Piazza don Luigi Pedrolli n.4<br />38123 Trento, Italia</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon-box">
                                    <Mail size={24} />
                                </div>
                                <div className="info-text">
                                    <h3>Email Generale</h3>
                                    <p>
                                        <a href="mailto:oratorio.parrocchiedelbondone@gmail.com">
                                            oratorio.parrocchiedelbondone@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon-box">
                                    <Mail size={24} />
                                </div>
                                <div className="info-text">
                                    <h3>Prenotazione Sale</h3>
                                    <p>
                                        <a href="mailto:prenotazionesale.oratorio@gmail.com">
                                            prenotazionesale.oratorio@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Map Column */}
                        <div className="map-container">
                            <iframe
                                title="Mappa Oratorio del Bondone"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489.29715481762986!2d11.061013164037549!3d46.073380248694505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4782710035f99fc5%3A0x23e922f6e33e41d!2sNOI%20Oratorio%20del%20Bondone!5e0!3m2!1sit!2suk!4v1778152987546!5m2!1sit!2suk"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

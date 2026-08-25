import React from 'react'
import { Calendar, Clock, MapPin, Activity, AlertCircle, ExternalLink, Mountain } from 'lucide-react'
import './Gita.css'

const Gita = () => {
    return (
        <div className="gita-page">
            <header className="gita-header">
                <div className="container">
                    <span className="gita-collab">NOI ORATORIO DEL BONDONE IN COLLABORAZIONE CON LA SAT DI SOPRAMONTE ORGANIZZANO</span>
                    <h1>GITA<br />RIFUGIO VAL DI FUMO</h1>
                    <div className="gita-date">
                        <Calendar className="icon" /> 6 SETTEMBRE
                    </div>
                </div>
            </header>

            <section className="gita-content-section container">
                <div className="gita-grid">
                    <div className="gita-info">
                        <div className="info-card gita-logistics">
                            <h2>DETTAGLI </h2>
                            <ul className="specs-list">
                                <li>
                                    <AlertCircle className="icon" style={{ color: 'var(--accent)' }} />
                                    <div>
                                        <strong>Iscrizioni entro:</strong>
                                        <span className="highlight-text">3 Settembre</span>
                                    </div>
                                </li>
                                <li>
                                    <MapPin className="icon" />
                                    <div>
                                        <strong>Ritrovo:</strong>
                                        <span>Piazza Oveno ore 7:00.<br />Viaggio in pulmini verso il punto di partenza: Malga Bissina.</span>
                                    </div>
                                </li>
                            </ul>

                            <div className="gita-action">
                                <a href="https://docs.google.com/forms" target="_blank" rel="noopener noreferrer" className="btn-iscriviti">
                                    ISCRIVITI ORA <ExternalLink size={20} />
                                </a>
                            </div>

                            <p className="gita-thanks">
                                <em>Un ringraziamento alla <strong>Sportiva</strong> per mettere a disposizione i pulmini.</em>
                            </p>
                        </div>
                    </div>

                    <div className="gita-poster">
                        <div className="poster-wrapper">
                            {/* Locandina della gita */}
                            <img src="/images/locandine/gita_sat.png" alt="Locandina Gita Rifugio Val Di Fumo" className="poster-img" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gita

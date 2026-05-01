import React from 'react'
import { Sun, Tent, MapPin, FileText } from 'lucide-react'
import './Estate2026.css'

const Estate2026 = () => {
    return (
        <div className="estate-page">
            <section className="estate-hero">
                <div className="container">
                    <h1>ESTATE 2026</h1>
                    <p>Un'estate indimenticabile ti aspetta. <br /> Scopri le attività dell'oratorio per il 2026.</p>
                </div>
            </section>

            <div className="container estate-content">

                <div className="section-header">
                    <h2>Attività in Programma</h2>
                </div>

                <div className="activities-grid">

                    {/* Grest Card */}
                    <div className="activity-card grest-card">
                        <div className="card-header">
                            <Sun size={28} />
                            <h3>Grest Sopramonte</h3>
                        </div>
                        <div className="card-body">
                            <div className="date-badge">
                                <span className="month">GIU</span>
                                <span className="days">22-26</span>
                            </div>
                            <div className="card-details">
                                <p className="target-audience">Dalla 1ª alla 5ª elementare</p>
                                <span className="subtitle-location">Oratorio Sopramonte</span>
                                <div className="info-tag">Tutta la giornata</div>
                            </div>
                        </div>
                    </div>

                    {/* Campeggi Monclassico Card (Grouped) */}
                    <div className="activity-card full-width-card">
                        <div className="card-header">
                            <Tent size={28} />
                            <h3>Campeggi Monclassico</h3>
                        </div>
                        <div className="card-body-list">

                            {/* Camp 1 */}
                            <div className="list-item">
                                <div className="date-badge small">
                                    <span className="month">AGO</span>
                                    <span className="days">16-23</span>
                                </div>
                                <div className="item-details">
                                    <h4>4ª - 5ª Elementare</h4>
                                    <p className="info-row">Una settimana di giochi e natura</p>
                                </div>
                            </div>

                            <div className="divider"></div>

                            {/* Camp 2 */}
                            <div className="list-item">
                                <div className="date-badge small">
                                    <span className="month">GIU/LUG</span>
                                    <span className="days">27-04</span>
                                </div>
                                <div className="item-details">
                                    <h4>1ª - 2ª Media</h4>
                                    <p className="info-row">Avventura e nuove amicizie</p>
                                </div>
                            </div>

                            <div className="divider"></div>

                            {/* Camp 3 */}
                            <div className="list-item">
                                <div className="date-badge small">
                                    <span className="month">AGO</span>
                                    <span className="days">23-30</span>
                                </div>
                                <div className="item-details">
                                    <h4>3ª Media - 1ª e 2ª Superiori</h4>
                                    <p className="info-row">Esperienze uniche e divertimento</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="registration-steps-section">
                    <div className="section-header">
                        <h2>I Passaggi dell'Iscrizione</h2>
                        <p>Le pre-iscrizioni si sono concluse il 28 febbraio alle 20:30. Ecco i prossimi passi per confermare la partecipazione.</p>
                    </div>

                    <div className="steps-container">
                        <div className="step-card completed">
                            <div className="step-number">1</div>
                            <h3>Pre-iscrizione</h3>
                            <p>Fase conclusa. Abbiamo raccolto le vostre richieste fino ad esaurimento posti.</p>
                        </div>

                        <div className="step-card completed">
                            <div className="step-number">2</div>
                            <h3>Mail di Conferma</h3>
                            <p>Entro 10 giorni dalla pre-iscrizione, riceverete una mail con l'esito della richiesta (conferma o lista d'attesa).</p>
                        </div>

                        <div className="step-card active">
                            <div className="step-number">3</div>
                            <h3>Incontro Genitori</h3>
                            <p>L'iscrizione si perfeziona con la presenza all'incontro genitori e il saldo della quota.</p>
                        </div>
                    </div>

                    <div className="info-cards-container" style={{ marginTop: '3rem' }}>
                        <div className="info-card specific-info grest-info">
                            <h3>Dettagli Grest</h3>
                            <ul className="info-list">
                                <li><strong>Quota:</strong> 120€ (100€ dal secondo figlio). <em>Nella quota sono compresi trasporti, gite e pranzi (esclusi i giorni delle gite).</em></li>
                                <li><strong>Incontro Genitori e Pagamento:</strong> <strong>27 aprile alle ore 20:30</strong> in Oratorio a Sopramonte. Unico momento in cui si potrà effettuare il pagamento della quota.</li>
                            </ul>
                            <a
                                href="/media/modulo_iscrizione_grest_2026.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pdf-btn grest-pdf-btn"
                            >
                                <FileText size={18} />
                                Modulo Iscrizione Grest
                            </a>
                        </div>

                        <div className="info-card specific-info campeggi-info">
                            <h3>Dettagli Campeggi</h3>
                            <ul className="info-list">
                                <li><strong>Quota:</strong> 250€ (200€ dal secondo figlio).</li>
                                <li><strong>Incontro Genitori e Pagamento:</strong> <strong>6 maggio alle ore 20:30</strong> in Oratorio a Sopramonte. Unico momento in cui si potrà effettuare il pagamento della quota.</li>
                            </ul>
                            <a
                                href="/media/modulo_iscrizione_campeggio_2026.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pdf-btn campeggio-pdf-btn"
                            >
                                <FileText size={18} />
                                Modulo Iscrizione Campeggio
                            </a>
                        </div>
                    </div>

                    <div className="additional-notes-section">
                        <div className="note-card membership-note">
                            <h4>Tesseramento NOI</h4>
                            <p>Ricordiamo che per partecipare a Grest e Campeggi è <strong>obbligatorio il tesseramento NOI</strong>. Potete tesserarvi direttamente il giorno stesso dell'incontro genitori al momento del pagamento.</p>
                        </div>

                        <div className="note-card support-note">
                            <h4>Un aiuto per tutti</h4>
                            <p>Vogliamo che il Grest e i Campeggi siano un'esperienza bellissima e davvero accessibile a tutti. Se qualche famiglia dovesse trovarsi in difficoltà a sostenere le quote di iscrizione, vi invitiamo a parlarne serenamente con il don. Insieme, in modo molto semplice e in totale anonimato, troveremo una soluzione per venire incontro ad ogni necessità.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Estate2026

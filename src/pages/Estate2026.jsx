import React from 'react'
import { Sun, Tent, MapPin } from 'lucide-react'
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

                {import.meta.env.VITE_SHOW_REGISTRATION_LINKS === 'true' && (
                    <div className="registration-links-section">
                        <div className="section-header">
                            <h2>Link Pre-iscrizioni</h2>
                            <p>Clicca sui box sottostanti per compilare il modulo di pre-iscrizione corrispondente.</p>
                        </div>
                        <div className="links-grid">
                            <a href={import.meta.env.VITE_LINK_GREST || '#'} target="_blank" rel="noopener noreferrer" className="link-card grest-link">
                                <h3>Grest Sopramonte</h3>
                                <span>Vai al Modulo &rarr;</span>
                            </a>
                            <a href={import.meta.env.VITE_LINK_CAMP_1 || '#'} target="_blank" rel="noopener noreferrer" className="link-card camp-link">
                                <h3>Campeggio 4ª-5ª Elementare</h3>
                                <span>Vai al Modulo &rarr;</span>
                            </a>
                            <a href={import.meta.env.VITE_LINK_CAMP_2 || '#'} target="_blank" rel="noopener noreferrer" className="link-card camp-link">
                                <h3>Campeggio 1ª-2ª Media</h3>
                                <span>Vai al Modulo &rarr;</span>
                            </a>
                            <a href={import.meta.env.VITE_LINK_CAMP_3 || '#'} target="_blank" rel="noopener noreferrer" className="link-card camp-link">
                                <h3>Camp. 3ª Media - Superiori</h3>
                                <span>Vai al Modulo &rarr;</span>
                            </a>
                        </div>
                    </div>
                )}

                <div className="registration-info-section">
                    <div className="section-header">
                        <h2>Informazioni Iscrizioni</h2>
                    </div>

                    <div className="info-cards-container">
                        <div className="info-card general-info">
                            <h3>Pre-iscrizioni Online</h3>
                            <p>Anche quest'anno le pre-iscrizioni ai campeggi e al Grest saranno <strong>online</strong> e <strong>fino ad esaurimento posti</strong>. Il link verrà pubblicato sui social e sul sito (noioratoriodelbondone.it).</p>
                            <ul className="info-list">
                                <li><strong>Apertura Iscrizioni Grest:</strong> 25 febbraio alle ore 20:30</li>
                                <li><strong>Apertura Iscrizioni Campeggi:</strong> 26 febbraio alle ore 20:30</li>
                                <li><strong>Termine Pre-iscrizione:</strong> entro il 28 febbraio</li>
                            </ul>
                            <p className="highlight-text">L'iscrizione sarà perfezionata con la ricezione della mail di avvenuta iscrizione (entro 10 giorni) e la partecipazione all'incontro genitori.</p>
                        </div>

                        <div className="info-card specific-info grest-info">
                            <h3>Dettagli Grest</h3>
                            <ul className="info-list">
                                <li><strong>Quota:</strong> 120€ (100€ dal secondo figlio). <em>Nella quota sono compresi trasporti, gite e pranzi (esclusi i giorni delle gite).</em></li>
                                <li><strong>Incontro Genitori e Pagamento:</strong> <strong>27 aprile alle ore 20:30</strong> in Oratorio a Sopramonte. Unico momento in cui si potrà effettuare il pagamento della quota.</li>
                            </ul>
                        </div>

                        <div className="info-card specific-info campeggi-info">
                            <h3>Dettagli Campeggi</h3>
                            <ul className="info-list">
                                <li><strong>Quota:</strong> 250€ (200€ dal secondo figlio).</li>
                                <li><strong>Incontro Genitori e Pagamento:</strong> <strong>6 maggio alle ore 20:30</strong> in Oratorio a Sopramonte. Unico momento in cui si potrà effettuare il pagamento della quota.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="additional-notes-section">
                        <div className="note-card membership-note">
                            <h4>Tesseramento NOI</h4>
                            <p>Ricordiamo che per partecipare a Grest e Campeggi è <strong>obbligatorio il tesseramento NOI</strong>. Al momento della pre-iscrizione online, però, <em>non serve essere già tesserati</em>: potete tesserarvi il giorno stesso dell'incontro genitori.</p>
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

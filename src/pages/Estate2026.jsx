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

                <p className="stay-tuned-message">
                    Presto ulteriori notizie per le iscrizioni ... <em>stay tuned!</em>
                </p>
            </div>
        </div>
    )
}

export default Estate2026

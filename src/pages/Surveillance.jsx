import React from 'react'
import { /* FileSpreadsheet, */ MoonStar, Sun } from 'lucide-react'
import '../PageLayout.css'
import './Surveillance.css'

const Surveillance = () => {
    return (
        <div className="surveillance-page">
            <div className="page-hero" style={{ '--page-color': 'var(--surveillance)' }}>
                <div className="container">
                    <h1 className="section-title">SORVEGLIANZA</h1>
                    <p className="intro-text">
                        Ogni sabato sera dalle 20:00, l'oratorio è aperto per offrire ai ragazzi
                        un luogo sicuro dove incontrarsi e trascorrere del tempo insieme.
                    </p>
                </div>
            </div>

            <div className="container">

                {/* Banner stagionale */}
                <div className="seasonal-banner">
                    <div className="seasonal-banner-ribbon"></div>
                    <div className="seasonal-banner-content">
                        <div className="seasonal-banner-icon">
                            <MoonStar size={28} />
                        </div>
                        <div className="seasonal-banner-text">
                            <strong>Attiva solo in inverno</strong>
                            <span>Durante il periodo estivo l'oratorio aperto il sabato sera è sospeso. Ci concentriamo sul <em>Grest</em> e sui <em>Campeggi</em>. Ci rivediamo in autunno! <Sun size={16} style={{ display: 'inline', verticalAlign: 'middle' }} /></span>
                        </div>
                    </div>
                </div>

                {/* =====================================================
                    AUTUNNO: decommentare il blocco qui sotto per
                    ripristinare il contenuto della pagina sorveglianza.
                    Rimuovere anche il commento all'import di FileSpreadsheet.
                    ===================================================== */}
                {/*
                <div className="dimmed-content">
                    <div className="surveillance-content">

                        <div className="text-block">
                            <p>
                                Per rendere possibile questa iniziativa, abbiamo bisogno della collaborazione di tutti.
                                Ogni sera è fondamentale la presenza di alcuni adulti per sorvegliare i ragazzi
                                e garantire che il tutto si svolga in modo sereno.
                            </p>
                        </div>

                        <div className="action-block">
                            <div className="action-text">
                                <p>
                                    Se vuoi contribuire, puoi dare la tua disponibilità inserendo il tuo nome
                                    nel file Excel qui accanto, nella data che preferisci.
                                </p>
                            </div>

                            <a
                                href="https://docs.google.com/spreadsheets/d/1-btCrQyoSMxjgQdcN5NiNOLXLlt6fTrvI90h2pI5ypY/edit?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-surveillance-large"
                            >
                                <FileSpreadsheet size={24} />
                                Sorveglianza
                            </a>
                        </div>

                    </div>
                </div>
                */}
            </div>
        </div>
    )
}

export default Surveillance

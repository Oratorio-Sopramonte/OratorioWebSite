import React from 'react'
import { FileSpreadsheet } from 'lucide-react'
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
        </div>
    )
}

export default Surveillance

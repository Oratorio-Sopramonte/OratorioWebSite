import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Shield, Users, ArrowRight } from 'lucide-react'
import './Home.css'

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content">
                    <h1>NOI ORATORIO DEL BONDONE</h1>
                </div>
            </section>

            {/* Estate 2026 Promo */}
            <section className="estate-promo-section">
                <div className="container">
                    <Link to="/estate-2026" className="estate-promo-banner">
                        <div className="estate-promo-content">
                            <span className="promo-tag">Novità</span>
                            <h2>ESTATE 2026</h2>
                            <p>Scopri le proposte per la prossima estate!</p>
                        </div>
                        <div className="estate-promo-icon">
                            <ArrowRight size={32} />
                        </div>
                    </Link>
                </div>
            </section>

            {/* About / Chi Siamo Section */}
            <section className="about-section">
                <div className="container">
                    <h2 className="section-title">Chi Siamo</h2>
                    <div className="about-content">
                        <p>
                            Noi Oratorio del Bondone è un’associazione di volontariato che si dedica con passione a promuovere
                            l’importanza dello stare insieme, ispirandosi ai valori cristiani.
                        </p>
                        <p>
                            Attraverso una varietà di attività, come l’oratorio aperto, i campeggi, i grest estivi e molto altro,
                            l’associazione crea occasioni di condivisione e crescita per la comunità e per i suoi associati.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <div className="features-grid">

                        {/* Prenota Sale - Orange (Primary) */}
                        <div className="feature-card card-booking">
                            <div className="icon-wrapper">
                                <Calendar size={48} color="var(--booking)" />
                            </div>
                            <h3>Prenota Sale</h3>
                            <p>Le sale dell'oratorio sono a disposizione alla comunità per compleanni, riunioni e attività.</p>
                            <Link to="/prenota-sale" className="card-link">Scopri di più <ArrowRight size={16} /></Link>
                        </div>

                        {/* Sorveglianza - Green (Success) */}
                        <div className="feature-card card-surveillance">
                            <div className="icon-wrapper">
                                <Shield size={48} color="var(--surveillance)" />
                            </div>
                            <h3>Sorveglianza</h3>
                            <p>Aiutaci a tenere aperto l’oratorio. La tua disponibilità è preziosa per garantire un ambiente sicuro.</p>
                            <Link to="/sorveglianza" className="card-link">Partecipa <ArrowRight size={16} /></Link>
                        </div>

                        {/* Tesseramento - Blue (Third) */}
                        <div className="feature-card card-membership">
                            <div className="icon-wrapper">
                                <Users size={48} color="var(--membership)" />
                            </div>
                            <h3>Tesseramento</h3>
                            <p>Entra a far parte della nostra famiglia. Il tesseramento sostiene le attività e ti rende partecipe.</p>
                            <Link to="/tesseramento" className="card-link">Iscriviti <ArrowRight size={16} /></Link>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home

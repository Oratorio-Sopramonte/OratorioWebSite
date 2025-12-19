import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src="/images/logo.png" alt="Oratorio del Bondone" className="logo-img" />
                    <span>Oratorio del Bondone</span>
                </Link>

                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </div>

                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={() => setIsOpen(false)}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/prenota-sale" className="nav-links" onClick={() => setIsOpen(false)}>Prenota Sale</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sorveglianza" className="nav-links" onClick={() => setIsOpen(false)}>Sorveglianza</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tesseramento" className="nav-links" onClick={() => setIsOpen(false)}>Tesseramento</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contatti" className="nav-links" onClick={() => setIsOpen(false)}>Contatti</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/estate-2026" className="nav-links nav-links-estate" onClick={() => setIsOpen(false)}>ESTATE</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

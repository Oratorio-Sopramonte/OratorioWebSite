import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-section">
                    <h3>Noi Oratorio del Bondone APS</h3>
                    <p>Piazza don Luigi Pedrolli n.4<br />38123 Trento Italia</p>
                </div>
                <div className="footer-section">
                    <h3>Contatti</h3>
                    <p>Email: <a href="mailto:oratorio.parrocchiedelbondone@gmail.com">oratorio.parrocchiedelbondone@gmail.com</a></p>
                    <p>Prenotazioni: <a href="mailto:prenotazionesale.oratorio@gmail.com">prenotazionesale.oratorio@gmail.com</a></p>
                </div>
                <div className="footer-section">
                    <h3>Social</h3>
                    <div className="social-links">
                        <a href="https://www.instagram.com/noioratoriodelbondone/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://www.facebook.com/noioratoriodelbondone/" target="_blank" rel="noopener noreferrer">Facebook</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Noi Oratorio del Bondone. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer

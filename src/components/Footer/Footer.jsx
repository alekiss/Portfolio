import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">AM</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/alekissmelo/" target="_blank"><BsLinkedin /></a>
        <a href="https://www.instagram.com/alekiss.melo/" target="_blank"><FaFacebookF /></a>
        <a href="https://www.facebook.com/alekiss.demelo" target="_blank"><FiInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; AM. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
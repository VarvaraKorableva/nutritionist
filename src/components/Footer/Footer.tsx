import './Footer.css'
import { FaLinkedin, FaInstagram, FaWhatsapp, FaTelegram, FaGoogle } from 'react-icons/fa'
import FrameDiv from '../UI-Kit/Frame/FrameDiv'

export default function Footer() {
  return (
    <footer className="footer__section" id="contact">
      <div className="footer__blurContainer">
      
              
        <ul className='footer__contact-container'>
                  <li className='hero__contact-item'>
                    <a className='hero__contact-item-link' href='mailto:varvarakorablevawork@gmail.com' target='_blank'>
                      <FaGoogle />
                    </a>
                  </li>
                  <li className='hero__contact-item'>
                    <a className='hero__contact-item-link' href='https://www.linkedin.com/in/varvara-korableva/' target='_blank'>
                      <FaLinkedin />
                    </a>
                  </li>
                  <li className='hero__contact-item'>
                    <a className='hero__contact-item-link' href='https://www.instagram.com/varvarakorableva/' target='_blank'>
                      <FaInstagram />
                    </a>
                  </li>
                  <li className='hero__contact-item'>
                    <a className='hero__contact-item-link' href='https://wa.me/+79163270427' target='_blank'>
                      <FaWhatsapp />
                    </a>
                  </li>
                  <li className='hero__contact-item'>
                    <a className='hero__contact-item-link' href='https://t.me/VarvaraKorableva' target='_blank'>
                      <FaTelegram />
                    </a>
                  </li>
            </ul>
      </div>
    </footer>
  )
}
import './Footer.css'
import { FaLinkedin, FaInstagram, FaWhatsapp, FaTelegram, FaGoogle } from 'react-icons/fa'
import Container from '../UI-Kit/Container/Container'

export default function Footer() {
  return (
    
    <Container as='footer' baseClassName='wrapper' className="footer__section">
      <Container as='div' baseClassName='wrapper' className="footer__wrapper"> 
      <Container as='div' baseClassName='container' className="footer__container"> 
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

        <ul className='footer__contactWrapper'>

          <li className='footer__li'>Обо мне</li>
          <li className='footer__li'>Услуги</li>
          <li className='footer__li'>Отзывы</li>
          <li className='footer__li'>Контакты</li>

        </ul>
      </Container> 
      </Container> 
    </Container> 
  )
}
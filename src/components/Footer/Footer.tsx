import './Footer.css'
import { FaInstagram, FaWhatsapp, FaTelegram, FaGoogle, FaYoutube } from 'react-icons/fa'
import Container from '../UI-Kit/Container/Container'
import { Link } from 'react-router-dom';
//import SocialLinks from '../Contacts/SocialLinks/SocialLinks'
import contacts from '../../Data/contacts.json'

export default function Footer() {
  return (
    
    <Container as='footer' baseClassName='wrapper' className="footer__section">
      <Container as='div' baseClassName='wrapper' className="footer__wrapper"> 
      <Container as='div' baseClassName='container' className="footer__container"> 
        <ul className='footer__contact-container'>
                  <li className='hero__contact-item'>
                    <a className='hero__contact-item-link' href={`mailto:${contacts[0].email}`} target='_blank'>
                      <FaGoogle />
                    </a>
                  </li>
                  <li className='hero__contact-item'>
                    <a className='hero__contact-item-link' href={`${contacts[0].youtube}`} target='_blank'>
                      <FaYoutube />
                    </a>
                  </li>
                  <li className='hero__contact-item'>
                    <a className='hero__contact-item-link' href={`${contacts[0].instagram}`} target='_blank'>
                      <FaInstagram />
                    </a>
                  </li>
                  <li className='hero__contact-item'>
                    <a className='hero__contact-item-link' href={`https://wa.me/${contacts[0].whatsapp}`} target='_blank'>
                      <FaWhatsapp />
                    </a>
                  </li>
                  <li className='hero__contact-item'>
                    <a className='hero__contact-item-link' href={`https://t.me/${contacts[0].telegram}`} target='_blank'>
                      <FaTelegram />
                    </a>
                  </li>
        </ul>

        <div className='footer__contactWrapper'>

          <Link to={'/about-me'} className='footer__li'>Обо мне</Link>
          <Link to={'/services'} className='footer__li'>Услуги</Link>
          <Link to={'/reviews-page'} className='footer__li'>Отзывы</Link>
          <Link to={'/contacts-page'} className='footer__li'>Контакты</Link>

        </div>
      </Container> 
      </Container> 
    </Container> 
  )
}
import { FaLinkedin, FaInstagram, FaWhatsapp, FaTelegram, FaGoogle } from 'react-icons/fa'
import './SocialLinks.css'

export default function SocialLinks() {
<ul className='SocialLinks__contact-container'>
    <li className='SocialLinks__contact-item'>
      <a className='SocialLinks__contact-item-link' href='mailto:varvarakorablevawork@gmail.com' target='_blank'>
        <FaGoogle />
      </a>
    </li>
    <li className='SocialLinks__contact-item'>
      <a className='SocialLinks__contact-item-link' href='https://www.linkedin.com/in/varvara-korableva/' target='_blank'>
        <FaLinkedin />
      </a>
    </li>
    <li className='SocialLinks__contact-item'>
      <a className='SocialLinks__contact-item-link' href='https://www.instagram.com/varvarakorableva/' target='_blank'>
        <FaInstagram />
      </a>
    </li>
    <li className='SocialLinks__contact-item'>
      <a className='SocialLinks__contact-item-link' href='https://wa.me/+79163270427' target='_blank'>
        <FaWhatsapp />
      </a>
    </li>
    <li className='SocialLinks__contact-item'>
      <a className='SocialLinks__contact-item-link' href='https://t.me/VarvaraKorableva' target='_blank'>
        <FaTelegram />
      </a>
    </li>
</ul>
}
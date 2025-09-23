import './Contacts.css'
import Heading from '../UI-Kit/Heading/Heading'
import Container from '../UI-Kit/Container/Container'
import contacts from '../../Data/contacts.json'
import { FaInstagram, FaWhatsapp, FaTelegram, FaGoogle, FaYoutube } from 'react-icons/fa'

export default function Contacts() {
    return(
        <Container>
            <p className='Contacts__title'>Вы всегда можете связаться со мной удобным для вас способом:</p>
            <ul>
                <li>{contacts[0].tel}</li>
                <li>                    
                    <a className='Contacts__contact-item-link' href={`${contacts[0].instagram}`} target='_blank'>
                        Instagram <FaInstagram />
                    </a>
                </li>
                <li>
                    <a className='Contacts__contact-item-link' href={`https://wa.me/${contacts[0].whatsapp}`} target='_blank'>
                        What's App <FaWhatsapp />
                    </a>
                </li>
                <li>
                    <a className='Contacts__contact-item-link' href={`https://t.me/${contacts[0].telegram}`} target='_blank'>
                        Telegram <FaTelegram />
                    </a>
                </li>
                <li>
                    <a className='Contacts__contact-item-link' href={`mailto:${contacts[0].email}`} target='_blank'>
                        Почта <FaGoogle />
                    </a>
                </li>
            </ul>
        </Container>
    )
}
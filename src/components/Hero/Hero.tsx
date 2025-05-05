import './Hero.css'
import { FaLinkedin, FaInstagram, FaWhatsapp, FaTelegram, FaGoogle } from 'react-icons/fa'
import Container from '../UI-Kit/Container/Container'

export default function Hero() {
  return (
    <Container as='section' baseClassName='wrapper' className='hero__section'>
      <Container as='div' baseClassName='wrapper' className='hero__section_blur'>
      <Container as='div' baseClassName='container'>
        <div className="hero__infoContainer">
            <div className="hero__imgAndIconsContainer">
              <div className="hero__img"></div>
              <ul className='hero__contact-container'>
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
            <div className="hero__textContainer">
                <h1 className="hero__title">Health, wellness-коуч, фитнес-тренер, <span className="hero__noWrap">врач и к.м.н.</span></h1>
                <h2 className="hero__subtitle">Индивидуальное сопровождение <span className="hero__noWrap">до результат</span>а</h2>
                <a className='hero__formLink'>
                  <p>Записаться на консультацию</p><div className='hero__btnHurt'></div>
                </a>
            </div>
        </div>
        </Container>
      </Container>
    </Container>
  )
}

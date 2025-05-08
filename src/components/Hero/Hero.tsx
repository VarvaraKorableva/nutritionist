import './Hero.css'
import { FaLinkedin, FaInstagram, FaWhatsapp, FaTelegram, FaGoogle } from 'react-icons/fa'
import Container from '../UI-Kit/Container/Container'
//<Container as='div' baseClassName='container'>
export default function Hero() {
  return (
    <Container as='section' baseClassName='wrapper' className='hero__section'>
      <Container as='div' baseClassName='container' className='hero__container'>
      
        <div className="hero__infoContainer">
            <div className="hero__imgAndIconsContainer">
              <div className="hero__img"></div>
              {/*<p>Кандидат медицинских наук | Wellness-коуч | Фитнес-тренер</p>*/}
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
              <div className="hero__titleContainer">
                <h1 className="hero__title">Здоровье и энергия — <span className="hero__noWrap">шаг за шагом</span></h1>
              </div>
                {/*<p>вместе со мной</p>*/}
                <h2 className="hero__subtitle">Индивидуальное сопровождение <span className="hero__noWrap">до результата</span></h2>
                <a className='hero__formLink'>
                  <p>Записаться на консультацию</p><div className='hero__btnHurt'></div>
                </a>
            </div>
        </div>
        
      </Container>
    </Container>
  )
}

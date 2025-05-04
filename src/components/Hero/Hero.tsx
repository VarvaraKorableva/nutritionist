import './Hero.css'
import { FaLinkedin, FaInstagram, FaWhatsapp, FaTelegram, FaGoogle } from 'react-icons/fa'
import BulletsApproach from '../BulletsApproach/BulletsApproach'
import FrameDiv from '../UI-Kit/Frame/FrameDiv'

export default function Hero() {
  return (
    <section className="hero__section">
      <FrameDiv >
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
                <a className='hero__formLink'>Записаться на консультацию</a>
            </div>
            <div className="hero__textContainer">
                <h1 className="hero__title">Health, wellness-коуч, фитнес-тренер, врач и к.м.н.</h1>
                <h2 className="hero__subtitle">Индивидуальное сопровождение до результата</h2>
            </div>
        </div>

      </FrameDiv>
    </section>
  )
}

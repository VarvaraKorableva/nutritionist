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
            </div>
            <div className="hero__textContainer">
                <h1 className="hero__title"><span className="hero__noWrap">Фитнес тренер</span> нутрициолог <span className="hero__noWrap">врач, к.м.н.</span></h1>
                <h2 className="hero__subtitle">Мотивирую заниматься физической активностью</h2>
            </div>
        </div>

        <BulletsApproach/>
      </FrameDiv>
    </section>
  )
}
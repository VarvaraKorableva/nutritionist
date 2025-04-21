import './Header.css'
import FrameDiv from '../UI-Kit/Frame/FrameDiv'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
    <FrameDiv className="header__container">

      <Link to={`/`} className="header__logoContainer">
        <div className="header__logoImg"></div>
        <div className="header__logoName">Рина Денисова</div>
      </Link>  

      <div className="header__navWrapper">
        <nav className="header__nav">
            <a href="#about">Обо мне</a>
            <a href="#services">Услуги</a>
            <a href="#testimonials">Отзывы</a>
            <a href="#adviсe">Блог</a>
            <a href="#contact">Контакты</a>
        </nav>

        <a href="tel:+79991234567" className="header__cta">
            📞 Позвонить
        </a>
      </div>

    </FrameDiv>  
    </header>
  )
}
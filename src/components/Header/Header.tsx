import './Header.css'
import Container from '../UI-Kit/Container/Container'
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi'
import { useState, useEffect } from 'react';

export default function Header() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Container as='header' baseClassName='wrapper' className="header">
      <Container as='div' baseClassName='container' className="header__container">

      <Link to={`/nutritionist/`} className="header__logoContainer">
        <div className="header__logoImg"></div>
        <div className="header__logoName text">Рина Денисова</div>
      </Link>  
      
      <div className="header__navWrapper">
      {width >= 900 ?
        <nav className="header__nav">
            <Link to={'/about-me'} className="header__navLink text">Обо мне</Link>
            <Link to={'/services'} className="header__navLink text">Услуги</Link>
            <a href="#reviews" className="header__navLink text">Отзывы</a>
            <a href="#contact" className="header__navLink text">Контакты</a>
        </nav>
      :
        <FiMenu className="header__burgerIcon"></FiMenu>
      }
        <a href="tel:+79991234567" className="header__cta">
            📞 
        </a>
      </div>

      </Container>  
    </Container>
  )
}
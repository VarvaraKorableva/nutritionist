import './About.css'
import Container from '../UI-Kit/Container/Container'
import { Link } from 'react-router-dom';
import Heading from '../UI-Kit/Heading/Heading'

export default function About() {
  return (
    <Container as='section' baseClassName='wrapper' className="about__section">
        <Container as='div' baseClassName='container' className="about__wrapper">
          <div className="about__heroPic"></div>
        
          <div className="about__heroTextContainer">
            <Heading>Привет! Меня зовут Рина Денисова</Heading>
            <p className="about__text text">
            Я - сертифицированный Health и wellness-коуч уровня ICF с высшим медицинским образованием и степенью кандидата наук. 
            В 2004 г я закончила педиатрический факультет медицинского университета с отличием, а в 2006 г получила сертификат по окончании ординатуры по педиатрии, а в 2009 г - степень кандидата наук. До 2022 г я работала детским ревматологом в федеральном центре г Москвы, занималась научной деятельностью, возглавляла отдел по клиническим исследованиям и локальный независимый этический комитет центра.
            </p>
            <Link to={'/about-me'} className="about__linkToPage btn">Узнать больше</Link>
          </div>

          <div className="about__heroPicAndTextContainer"></div>

        </Container>
    </Container>
  )
}

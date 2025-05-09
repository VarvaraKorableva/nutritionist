import './About.css'
import Heading from '../UI-Kit/Heading/Heading'
import Container from '../UI-Kit/Container/Container'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <Container as='section' baseClassName='wrapper'>
        <Container as='div' baseClassName='container' className="about__wrapper">
        <Heading>Обо мне</Heading>

        <div className="about__heroPicAndTextContainer">

          <div className="about__heroTextContainer">
            <p className="about__text">
            Привет! Меня зовут Рина Денисова. Я - сертифицированный Health и wellness-коуч уровня ICF с высшим медицинским образованием и степенью кандидата наук. 
            В 2004 г я закончила педиатрический факультет медицинского университета с отличием, а в 2006 г получила сертификат по окончании ординатуры по педиатрии, а в 2009 г - степень кандидата наук. До 2022 г я работала детским ревматологом в федеральном центре г Москвы, занималась научной деятельностью, возглавляла отдел по клиническим исследованиям и локальный независимый этический комитет центра.
            </p>
          </div>
          <div className="about__heroPic"></div>
        </div>

        <Link to={'/about-me'} className="about__linkToPage">Узнать больше</Link>

        </Container>
    </Container>
  )
}
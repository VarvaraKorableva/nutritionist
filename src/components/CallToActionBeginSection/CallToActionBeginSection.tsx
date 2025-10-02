import './CallToActionBeginSection.css'
import Container from '../UI-Kit/Container/Container'
import Heading from '../UI-Kit/Heading/Heading'
import { Link } from 'react-router-dom';

export default function CallToActionBeginSection() {
    return (
        <Container as='section' baseClassName='wrapper' className="CallToActionBeginSection__section">
            <Container as='div' baseClassName='container' className="CallToActionBeginSection__wrapper">
                <Container as='div' baseClassName='container' className="CallToActionBeginSection__container">
                    <Heading className="CallToActionBeginSection__title">Давно откладываешь заботу о себе «на&nbsp;потом» ?</Heading>
                    <p className="CallToActionBeginSection__text text">
                        Давай начнём с малого — сделай первый шаг уже сегодня
                    </p>

                    <a 
                        href="https://forms.yandex.ru/u/68dd001750569022682f3093" 
                        className="CallToActionBeginSection__linkToPage" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >Записаться на бесплатную консультацию</a>
                </Container>
            </Container>
        </Container>
    )
}
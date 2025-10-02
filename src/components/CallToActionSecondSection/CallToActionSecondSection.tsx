import './CallToActionSecondSection.css'
import Container from '../UI-Kit/Container/Container'
import Heading from '../UI-Kit/Heading/Heading'
import { Link } from 'react-router-dom';

export default function CallToActionSecondSection() {
    return (
        
            <Container as='div' baseClassName='container' className="CallToActionSecondSection__wrapper">
                <Container as='div' className="CallToActionSecondSection__container">
                    <Heading className="CallToActionSecondSection__title">Перегружен стрессом?</Heading>
                    <p className="CallToActionSecondSection__text text">
                        Хочешь научиться бережному отношению к себе?
                    </p>

                    <Link to={'/about-me'} className="CallToActionSecondSection__linkToPage btn">Сделать первый шаг</Link>
                </Container>
            </Container>
        
    )
}
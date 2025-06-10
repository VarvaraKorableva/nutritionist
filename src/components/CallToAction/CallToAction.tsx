import './CallToAction.css'
import Container from '../UI-Kit/Container/Container'
import Heading from '../UI-Kit/Heading/Heading'
import { Link } from 'react-router-dom';

export default function CallToAction() {
    return (
        <Container as='section' baseClassName='wrapper' className="CallToAction__section">
            <Container as='div' baseClassName='container' className="CallToAction__wrapper">
                <Container as='div' className="CallToAction__container">
                    <Heading className="CallToAction__title">Сделайте первый шаг</Heading>
                    <p className="CallToAction__text text">
                        Запишитесь на бесплатную 20-минутную консультацию, чтобы узнать, как мы можем поработать вместе
                    </p>

                    <Link to={'/about-me'} className="CallToAction__linkToPage btn">Записаться на звонок</Link>
                </Container>
            </Container>
        </Container>
    )
}
import './Mission.css'
import Container from '../UI-Kit/Container/Container'
import Heading from '../UI-Kit/Heading/Heading'
import { Link } from 'react-router-dom';

export default function Mission() {
    return (
        <Container as='section' baseClassName='wrapper'>
            <Container as='div' baseClassName='container' className="mission__wrapper">
                <Container as='div' className="mission__container">
                    <Heading className="mission__title">Осознанный подход к изменениям</Heading>
                    <p className="mission__text text">
                        Мой подход помогает выйти из внутреннего тупика, научиться бережно встречаться со своими чувствами и страхами, принять себя с заботой и уважением.
                        Через осознанность мы проясняем, чего на самом деле хотим, и шаг за шагом движемся к жизни, в которой больше радости, баланса и внутреннего согласия.
                    </p>

                    <Link to={'/about-me'} className="mission__link">Хочу попробовать</Link>
                </Container>
            </Container>
        </Container>
    )
}
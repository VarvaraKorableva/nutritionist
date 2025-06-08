//
import './YourResults.css'
import Heading from '../UI-Kit/Heading/Heading'
import Container from '../UI-Kit/Container/Container'

export default function YourResults() {
    return (
        <Container as='section' baseClassName='wrapper' className="yourResults__wrapper">
            <Container as='section' baseClassName='wrapper' className="yourResults__color">
            <Container as='div' baseClassName='container' >
            <Heading>Ваши результаты</Heading>
            <div className="yourResults__container">
                <ul>
                    <li>Новые Привычки</li>
                    <li>Новые Навыки</li>
                    <li>Новое Состояние</li>
                    <li>Новый Образ жизни</li>
                    <li>Новое Мышление</li>
                </ul>
            </div>
            </Container>
            </Container>
        </Container>
    )
}

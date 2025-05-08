//
import './YourResults.css'
import Heading from '../UI-Kit/Heading/Heading'
import Container from '../UI-Kit/Container/Container'

export default function YourResults() {
    return (
        <Container as='section' baseClassName='wrapper' className="yourResults__wrapper">
            <Container as='div' baseClassName='container' >
            <Heading>Ваши результаты</Heading>
            <ul>
                <li>Новые привычки</li>
                <li>Новые навыки</li>
                <li>Новое Состояние</li>
                <li>Новый Образ жизни</li>
                <li>Новое Мышление</li>
            </ul>
            </Container>
        </Container>
    )
}


import './Education.css'
import Heading from '../UI-Kit/Heading/Heading'
import Container from '../UI-Kit/Container/Container'

export default function Education() {
    return(
        <Container as='section' baseClassName='wrapper'>
            <Container as='div' baseClassName='container' className="education__container">
                <Heading>Мое образование</Heading>
                <ul>
                    <li></li>
                </ul>
                <h3>Я ощущаю непрерывную потребность в получении новых знаний и навыков, чтобы применять их на практике и приносить реальную пользу людям.</h3>
            </Container>
        </Container>
    )
}            
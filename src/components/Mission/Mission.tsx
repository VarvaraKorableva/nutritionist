import './Mission.css'
import Container from '../UI-Kit/Container/Container'

export default function Mission() {
    return (
        <Container as='section' baseClassName='container'>
            <Container as='div' baseClassName='wrapper' className="mission__wrapper">
                <p className="mission__text">Моя миссия - вдохновлять и направлять людей в их уникальном путешествии к осознанному здоровью, внутреннему благополучию и счастливой жизни!</p>
                <div className="mission__sunPic"></div>
            </Container>
        </Container>
    )
}
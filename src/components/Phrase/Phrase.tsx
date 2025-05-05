import './Phrase.css'
import Container from '../UI-Kit/Container/Container'

export default function Phrase() {
    return(
        <Container as='section' baseClassName='wrapper'>
            <Container as='div' baseClassName='container'>
            <div className="Phrase__subtitleContainer">
                <div className="Phrase__subtitlePic"></div>
                <p className="Phrase__subtitle">У меня нет общей программы для всех, Я помогу Вам обрести не только прекрасное самочувствие, но и здоровые отношения со своим телом, где зеркало станет вашим другом.</p>
            </div>
            </Container>
        </Container>
    )
}        
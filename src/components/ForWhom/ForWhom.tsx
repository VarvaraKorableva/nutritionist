import './ForWhom.css'
import Heading from '../UI-Kit/Heading/Heading'
import Container from '../UI-Kit/Container/Container'
import Phrase from '../Phrase/Phrase'

export default function ForWhom() {
    return(
        <Container as='section' baseClassName='wrapper' className="forWhom__wrapper">
            <Container as='div' baseClassName='container'>
            <Heading>Кому подойдет работа со мной?</Heading>
            <div className="forWhom__container">
            <ul className="forWhom__flowerAndTextWrapper">
                <li className="forWhom__flowerAndTextContainer">
                    <div className="forWhom__flower"></div>
                    <p className="forWhom__text">Тому, кто выбирает осознанный подход к своему физическому и ментальному здоровью вместо опасных экспериментов</p>
                </li>
                <li className="forWhom__flowerAndTextContainer">
                    <div className="forWhom__flower"></div>
                    <p className="forWhom__text">Разумным людям, не желающим рисковать своим здоровьем и благополучием</p>
                </li>
                <li className="forWhom__flowerAndTextContainer">
                    <div className="forWhom__flower"></div>
                    <p className="forWhom__text">Тому, кто устал от циклов «старт-срыв»</p>
                </li>
                <li className="forWhom__flowerAndTextContainer">
                    <div className="forWhom__flower"></div>
                    <p className="forWhom__text">Тому, кто хочет понимать свое тело, а не просто следовать инструкциям</p>
                </li>
                <li className="forWhom__flowerAndTextContainer">
                    <div className="forWhom__flower"></div>
                    <p className="forWhom__text">Тому, кто ищет персонального навигатора в сфере здоровья и велнеса</p>
                </li>
            </ul>

            <div className="forWhom__forWhomFlower"></div>
            </div>
            </Container>
        </Container>
    )
}
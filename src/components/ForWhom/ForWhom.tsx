import './ForWhom.css'
import Heading from '../UI-Kit/Heading/Heading'
import Container from '../UI-Kit/Container/Container'

export default function ForWhom() {
    return(
        <Container as='section' baseClassName='wrapper' className="forWhom__wrapper">
            <Container as='div' baseClassName='container'>
            <Heading>Кому подойдет работа со мной?</Heading>
            <ul className="forWhom__textContainer">
                <li>
                    {/*<div className="forWhom__flower"></div>*/}
                    <p className="forWhom__text">Тому, кто выбирает осознанный подход к своему физическому и ментальному здоровью вместо опасных экспериментов</p>
                </li>
                <li>
                    <p className="forWhom__text">Разумным людям, не желающим рисковать своим здоровьем и благополучием</p>
                </li>
                <li>
                    <p className="forWhom__text">Тому, кто устал от циклов «старт-срыв»</p>
                </li>
                <li>
                    <p className="forWhom__text">Тому, кто хочет понимать свое тело, а не просто следовать инструкциям</p>
                </li>
                <li>
                    <p className="forWhom__text">Тому, кто ищет персонального навигатора в сфере здоровья и велнеса</p>
                </li>
            </ul>
            </Container>
        </Container>
    )
}
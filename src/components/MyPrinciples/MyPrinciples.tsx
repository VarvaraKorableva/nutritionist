
import './MyPrinciples.css'
import Heading from '../UI-Kit/Heading/Heading'
import Container from '../UI-Kit/Container/Container'
import { FaFlask, FaBalanceScale, FaUserCheck, FaHandshake, FaHeart, FaLightbulb } from 'react-icons/fa'

export default function MyPrinciples() {
    return(
        <Container as='section' baseClassName='wrapper' className="myPrinciples__container">
        <Container as='section' baseClassName='wrapper' className="myPrinciples__container_blur">
        <Container as='div' baseClassName='container' className="myPrinciples__wrapper">
            <Heading>Мои принципы в работе</Heading>
            <ul className="myPrinciples__ulContainer">

<li className="myPrinciples__liContainer">
    <div className="myPrinciples__faviconAndTitleContainer">
        <FaBalanceScale className="myPrinciples__favicon" />
        <h3 className="sub_sub_title">Профессиональные границы и этика</h3>
    </div>
    <p className="myPrinciples__text text">
        Чёткое соблюдение границ профессиональной компетенции и этических норм в каждой ситуации.
    </p>
</li>

<li className="myPrinciples__liContainer">
    <div className="myPrinciples__faviconAndTitleContainer">
        <FaHandshake className="myPrinciples__favicon" />
        <h3 className="sub_sub_title">Партнёрство и доверие</h3>
    </div>
    <p className="myPrinciples__text text">
        Работа в формате диалога и взаимного уважения, где клиенту можно доверять и быть собой.
    </p>
</li>

<li className="myPrinciples__liContainer">
    <div className="myPrinciples__faviconAndTitleContainer">
        <FaHeart className="myPrinciples__favicon" />
        <h3 className="sub_sub_title">Фокус на заботу о себе</h3>
    </div>
    <p className="myPrinciples__text text">
        Забота о благополучии клиента как главная ценность — без давления и ожидания быстрых результатов.
    </p>
</li>

<li className="myPrinciples__liContainer">
    <div className="myPrinciples__faviconAndTitleContainer">
        <FaFlask className="myPrinciples__favicon" />
        <h3 className="sub_sub_title">Доказательность и наука</h3>
    </div>
    <p className="myPrinciples__text text">
        Подход, основанный на актуальных научных данных и рекомендациях доказательной медицины.
    </p>
</li>

<li className="myPrinciples__liContainer">
    <div className="myPrinciples__faviconAndTitleContainer">
        <FaUserCheck className="myPrinciples__favicon" />
        <h3 className="sub_sub_title">Индивидуальный подход</h3>
    </div>
    <p className="myPrinciples__text text">
        Уважение к уникальности каждого клиента: его целям, опыту, личным качествам и темпу движения.
    </p>
</li>

<li className="myPrinciples__liContainer">
    <div className="myPrinciples__faviconAndTitleContainer">
        <FaLightbulb className="myPrinciples__favicon" />
        <h3 className="sub_sub_title">Развитие и осознанность</h3>
    </div>
    <p className="myPrinciples__text text">
        Помощь в раскрытии потенциала, развитии осознанности и формировании устойчивых изменений в жизни.
    </p>
</li>

</ul>

        </Container>
        </Container>
        </Container>
    )
}
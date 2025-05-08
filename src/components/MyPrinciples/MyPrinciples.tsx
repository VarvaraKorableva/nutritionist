
import './MyPrinciples.css'
import Heading from '../UI-Kit/Heading/Heading'
import Container from '../UI-Kit/Container/Container'

export default function MyPrinciples() {
    return(
        <Container as='section' baseClassName='wrapper' className="myPrinciples__container">
        <Container as='section' baseClassName='wrapper' className="myPrinciples__container_blur">
        <Container as='div' baseClassName='container' className="myPrinciples__wrapper">
            <Heading>Мои принципы в работе</Heading>
            <ul className="myPrinciples__ulContainer">
                <li>
                    <p className="myPrinciples__text">Доказательный подход и следование принципам доказательной медицины: опора на качественные научные рекомендации и исследования</p>
                </li>
                <li>
                    <p className="myPrinciples__text">Строгое соблюдение границ компетенций и этического кодекса</p>
                </li>
                <li>
                    <p className="myPrinciples__text">Клиентоцентрированный индивидуальный подход, то есть интересы, цели, опыт и качества клиента - это главный мой приоритет</p>
                </li>
                <li>
                    <p className="myPrinciples__text">Партнерские отношения с клиентом, основанные на уважении и доверии</p>
                </li>
                <li>
                    <p className="myPrinciples__text">Фокус на личности клиента и его заботе о себе, а не результат любой ценой</p>
                </li>
            </ul>

            <div className="myPrinciples__pic"></div>
        </Container>
        </Container>
        </Container>
    )
}
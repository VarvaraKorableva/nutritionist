
import './MyPrinciples.css'
import Heading from '../UI-Kit/Heading/Heading'
import Container from '../UI-Kit/Container/Container'

export default function MyPrinciples() {
    return(
        <Container as='section' baseClassName='wrapper' className="myPrinciples__container">
        <Container as='div' baseClassName='container' className="myPrinciples__wrapper">
            <Heading>Мои принципы в работе</Heading>

            <ul className="myPrinciples__principlesContainer">
                <li className="myPrinciples__principlesCard">
                    <div className='myPrinciples__listsImg'></div>
                    <p>Доказательный подход и следование принципам доказательной медицины: опора на качественные научные рекомендации и исследования</p>
                </li>
                <li className="myPrinciples__principlesCard">
                    <p>Строгое соблюдение границ компетенций и этического кодекса</p>
                    <div className='myPrinciples__listsImg myPrinciples__listsImgDown'></div>
                </li>
                <li className="myPrinciples__principlesCard">
                    <p>Клиентоцентрированный индивидуальный подход, то есть интересы, цели, опыт и качества клиента - это главный мой приоритет</p>
                    <div className='myPrinciples__listsImg myPrinciples__listsImgRight'></div>
                </li>
                <li className="myPrinciples__principlesCard">
                    <div className='myPrinciples__listsImg myPrinciples__listsImgRight'></div>
                    <p>Партнерские отношения с клиентом, основанные на уважении и доверии</p>
                </li>
                <li className="myPrinciples__principlesCard">
                    <p>Фокус на личности клиента и его заботе о себе, а не результат любой ценой</p>
                    <div className='myPrinciples__listsImg myPrinciples__listsImgDown'></div>
                </li>
            </ul>
        </Container>
        </Container>
    )
}
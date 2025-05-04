
import './MyPrinciples.css'
import Heading from '../UI-Kit/Heading/Heading'
import FrameSection from '../UI-Kit/Frame/FrameSection'

export default function MyPrinciples() {
    return(
        <section className="myPrinciples__wrapper">
        <FrameSection>
            <Heading>Мои принципы в работе</Heading>

            <ul className="myPrinciples__principlesContainer">
                <li className="myPrinciples__principlesCard">Доказательный подход и следование принципам доказательной медицины: опора на качественные научные рекомендации и исследования</li>
                <li className="myPrinciples__principlesCard">Строгое соблюдение границ компетенций и этического кодекса</li>
                <li className="myPrinciples__principlesCard">Клиентоцентрированный индивидуальный подход, то есть интересы, цели, опыт и качества клиента - это главный мой приоритет</li>
                <li className="myPrinciples__principlesCard">Партнерские отношения с клиентом, основанные на уважении и доверии</li>
                <li className="myPrinciples__principlesCard">Фокус на личности клиента и его заботе о себе, а не результат любой ценой</li>
            </ul>
        </FrameSection>
        </section>
    )
}
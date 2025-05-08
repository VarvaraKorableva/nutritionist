import './HowWeWork.css'
import Heading from '../UI-Kit/Heading/Heading'
import Container from '../UI-Kit/Container/Container'

export default function HowWeWork() {
    return(
        <Container as='section' baseClassName='wrapper' className="HowWeWork__container">
        <Container as='div' baseClassName='container'>
            <Heading>Как мы работаем</Heading>
            <p className="HowWeWork__textContailer">Диагностическая сессия, чтобы определить Ваш запрос и убедиться, что мы подходим друг другу</p>
            {/*Стрелка вниз*/ }
            <ul className="HowWeWork__textContailer">
                <li>
                    Зона компетенций хэлс и велнес коуча 
                </li>
                <li>
                    Работаем вместе над вашими целями, применяя весь инструмент хелс- и велнес - коучинга, позитивной психологии, изменения поведения, научные знания в сфере питания, физической активности, и стресс-менеджмента.
                </li>
                <li>
                    В процессе работы создаем гибкую систему без “правил” и “запретов”, составляем карту ваших ресурсов.
                </li>
                <li>
                    Вы планомерно в спокойном темпе с бережным отношением к себе достигаете ваших целей и учитесь поддерживать их самостоятельно.
                </li>
            </ul>
        </Container>
        </Container>
    )
}
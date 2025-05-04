//
import './YourResults.css'
import Heading from '../UI-Kit/Heading/Heading'
import FrameSection from '../UI-Kit/Frame/FrameSection'

export default function YourResults() {
    return (
        <FrameSection>
            <Heading>Ваши результаты</Heading>
            <ul>
                <li>Новые привычки</li>
                <li>Новые навыки</li>
                <li>Новое Состояние</li>
                <li>Новый Образ жизни</li>
                <li>Новое Мышление</li>
            </ul>

            <p>Ценные знания + Навыки саморегуляции + Осознанность</p> 
            <p>=</p> 
            <p className="yourResults__uppercase">здоровье, энергия, гармоничное тело и спокойный ум</p>

        </FrameSection>
    )
}

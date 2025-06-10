
import './MyPrinciples.css'
import Heading from '../UI-Kit/Heading/Heading'
import Container from '../UI-Kit/Container/Container'
import { FaFlask, FaBalanceScale, FaUserCheck, FaHandshake, FaHeart, FaLightbulb } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'

export default function MyPrinciples() {

    const sectionRef = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    return (
        <Container as='section' baseClassName='wrapper' className="myPrinciples__container">
            <Container as='section' baseClassName='wrapper' className="myPrinciples__container_blur">
                <Container as='div' baseClassName='container' className="myPrinciples__wrapper">
                    <Heading>Мои принципы в работе</Heading>
                    <ul className="myPrinciples__ulContainer" ref={sectionRef}>
                        {[
                            {
                                icon: <FaBalanceScale />,
                                title: "Профессиональные границы и этика",
                                text: "Чёткое соблюдение границ профессиональной компетенции и этических норм в каждой ситуации."
                            },
                            {
                                icon: <FaHandshake />,
                                title: "Партнёрство и доверие",
                                text: "Работа в формате диалога и взаимного уважения, где клиенту можно доверять и быть собой."
                            },
                            {
                                icon: <FaHeart />,
                                title: "Фокус на заботу о себе",
                                text: "Забота о благополучии клиента как главная ценность — без давления и ожидания быстрых результатов."
                            },
                            {
                                icon: <FaFlask />,
                                title: "Доказательность и наука",
                                text: "Подход, основанный на актуальных научных данных и рекомендациях доказательной медицины."
                            },
                            {
                                icon: <FaUserCheck />,
                                title: "Индивидуальный подход",
                                text: "Уважение к уникальности каждого клиента: его целям, опыту, личным качествам и темпу движения."
                            },
                            {
                                icon: <FaLightbulb />,
                                title: "Развитие и осознанность",
                                text: "Помощь в раскрытии потенциала, развитии осознанности и формировании устойчивых изменений в жизни."
                            },
                        ].map((item, i) => (
                            <li className={`myPrinciples__liContainer ${visible ? 'visible' : ''}`} style={{ animationDelay: `${i * 0.1}s` }} key={i}>
                                <div className="myPrinciples__faviconAndTitleContainer">
                                    <div className="myPrinciples__favicon">{item.icon}</div>
                                    <h3 className="sub_sub_title">{item.title}</h3>
                                </div>
                                <p className="myPrinciples__text text">{item.text}</p>
                            </li>
                        ))}
                    </ul>
                </Container>
            </Container>
        </Container>
    )
}

import './Mission.css'
import Container from '../UI-Kit/Container/Container'
import Heading from '../UI-Kit/Heading/Heading'
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

export default function Mission() {
    const containerRef = useRef(null)
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

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current)
            }
        }
    }, [])

    return (
        <Container as='section' baseClassName='wrapper' ref={containerRef}>
            <Container as='div' baseClassName='container' className="mission__wrapper">
                <Container as='div' className="mission__container">
                    <div className={`AboutMePage__titleAndText ${visible ? 'visible' : ''}`}>
                        <Heading className="mission__title">Осознанный подход к изменениям</Heading>
                    
                        <p className="mission__text text" >
                            Мой подход помогает выйти из внутреннего тупика, научиться бережно встречаться со своими чувствами и страхами, принять себя с заботой и уважением.
                            Через осознанность мы проясняем, чего на самом деле хотим, и шаг за шагом движемся к жизни, в которой больше радости, баланса и внутреннего согласия.
                        </p>
                    </div>
                    <Link to={'/about-me'} className="mission__link btn">Хочу попробовать</Link>
                </Container>
            </Container>
        </Container>
    )
}
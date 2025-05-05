import './Services.css'
import Heading from '../UI-Kit/Heading/Heading'
import Container from '../UI-Kit/Container/Container'
import tariffs from '../../Data/tariffs.json'
import { Link } from 'react-router-dom'

export default function Services() {
    return (
        <section className="services__wrapper" id="services">
            <Container>
                <Heading>Услуги и программы</Heading>

                <ul className="services__cardWrapper">
                    {tariffs.map(service => (
                        <Link className="services__card" key={service.id} to={`/services/${service.slug}`}>
                            
                            <h3 className="services__cardTitle">
                                {service.title}
                            </h3>
                            
                            <p className="services__cardText">{service.description}</p>
                            {service.details.map((detail, index) => (
                                <p className="services__cardText" key={index}>
                                    <strong>{detail.label}:</strong> {detail.value}
                                </p>
                            ))}

                            <button className="services__btn">
                                Узнать подробнее
                            </button>
                        </Link>
                    ))}
                </ul>
            </Container>
        </section>
    )
}

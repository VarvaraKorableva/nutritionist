import './Services.css'
import Heading from '../UI-Kit/Heading/Heading'
import Container from '../UI-Kit/Container/Container'
import services from '../../Data/services.json'

export default function Services() {
    return (
        <section className="services__wrapper" id="services">
            <Container>

                <ul className="services__cardWrapper">
                    {services.map(service => (
                        <li className="services__card" key={service.id}>
                            <h3 className="services__cardTitle">
                                {service.title}
                            </h3>

                            {/* список тарифов */}
                            <ul className="services__durations">
                                {service.durations.map((d, index) => (
                                    <li key={index} className="services__durationItem">
                                        <strong>{d.label}:</strong> {d.price_rub} ₽ ({d.price_ils} ₪)
                                    </li>
                                ))}
                            </ul>

                            {/* список особенностей */}
                            <ul className="services__features">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="services__feature">
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    )
}

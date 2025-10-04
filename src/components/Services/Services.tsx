import './Services.css'
import Container from '../UI-Kit/Container/Container'
import services from '../../Data/services.json'

export default function Services() {
    return (
        <Container baseClassName='wrapper' id="services">
            <Container className="services__wrapper">

                <ul className="services__cardWrapper">
                    {services.map(service => (
                        <li className="services__card" key={service.id}>
                            <h3 className="services__cardTitle">
                                {service.title}
                            </h3>

                            {/* список тарифов */}
                            <ul className="services__durations">
                                {service.durations.map((d, index) => (
                                    <li key={index} className="services__durationItem text">
                                        <strong>{d.label}:</strong> {d.price_rub} ₽ ({d.price_ils} ₪)
                                    </li>
                                ))}
                            </ul>

                            {/* список особенностей */}
                            <ul className="services__features">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="services__feature text">
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        
                        </li>
                    ))}
                </ul>
            </Container>
        </Container>
    )
}

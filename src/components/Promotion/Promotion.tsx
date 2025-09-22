import './Promotion.css'
import Container from '../UI-Kit/Container/Container'

export default function Promotion() {
    return(
        <Container as='section' baseClassName='wrapper' className='aboutMePageTitle__section'>
            <Container as='div' baseClassName='wrapper' className='aboutMePageTitle__wrapper'>
                <div className='Promotion__title-container'>
                    <p className='Promotion__title'>Акция «Приведи друга»</p>
                    <p className='Promotion__text'>Приведи друга и получи вторую аналогичную услугу в подарок (при оплате услуги другом)</p>
                </div>
            </Container>
        </Container>
    )
}
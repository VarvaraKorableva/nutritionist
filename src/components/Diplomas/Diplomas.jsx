import './Diplomas.css'
import Heading from '../UI-Kit/Heading/Heading'
import Container from '../UI-Kit/Container/Container'
import diplomas from '../../Data/diplomas.json'

export default function Diplomas({handleCardClick}) {
    
    const onDiploma = (diploma) => {
        handleCardClick(diploma)
    }
    return(
        <Container>
            <Heading>Дипломы и Сертификаты</Heading>
            <ul className='diploma__wrapper'>
                {
                    diplomas.map((i) => (
                        <li key={i.img_id} className='diploma__card-container'>
                            <img src={i.image} alt={i.img_name} className='diploma__card-img' onClick={() => onDiploma(i)}/>
                        </li>
                    ))
                }
            </ul>
        </Container>
    )
}
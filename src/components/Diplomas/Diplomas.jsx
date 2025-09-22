import './Diplomas.css'
import Heading from '../UI-Kit/Heading/Heading'
import Container from '../UI-Kit/Container/Container'
import firstPic from '../../images/diplomas/1.png'
import secondPic from '../../images/diplomas/2.png'
import thirdPic from '../../images/diplomas/3.png'
import fourhPic from '../../images/diplomas/4.png'

export default function Diplomas() {
    return(
        <Container>
            <Heading>Дипломы и Сертификаты</Heading>
            <ul className='diploma__wrapper'>
                <li className='diploma__card-container'>
                    <img src={firstPic} alt={'diploma'} className='diploma__card-img'></img>
                </li>
                <li className='diploma__card-container'>
                    <img src={secondPic} alt={'diploma'} className='diploma__card-img'></img>
                </li>
                <li className='diploma__card-container'>
                    <img src={thirdPic} alt={'diploma'} className='diploma__card-img'></img>
                </li>
                <li className='diploma__card-container'>
                    <img src={fourhPic} alt={'diploma'} className='diploma__card-img'></img>
                </li>
            </ul>
        </Container>
    )
}
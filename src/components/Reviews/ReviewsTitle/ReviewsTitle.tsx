import './ReviewsTitle.css'
import Container from '../../UI-Kit/Container/Container'

export default function ReviewsTitle() {
  return (
    <Container as='section' baseClassName='wrapper' className='ReviewsTitle__section'>
      <Container as='div' baseClassName='wrapper' className='ReviewsTitle__wrapper'>
      <Container as='div' baseClassName='container' className='ReviewsTitle__container'>
        <h2 className='ReviewsTitle__title'>Отзывы</h2>
      </Container>
      </Container>
    </Container>
  )
}

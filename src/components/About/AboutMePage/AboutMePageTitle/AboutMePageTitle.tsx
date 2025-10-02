import './AboutMePageTitle.css'
import Container from '../../../UI-Kit/Container/Container'

export default function AboutMePageTitle() {
  return (
    <Container as='section' baseClassName='wrapper' className='aboutMePageTitle__section'>
      <Container as='div' baseClassName='wrapper' className='aboutMePageTitle__wrapper'>
      <Container as='div' baseClassName='container' className='aboutMePageTitle__container'>
      
        <h2 className='aboutMePageTitle__title'>Обо мне</h2>
      </Container>
      </Container>
    </Container>
  )
}

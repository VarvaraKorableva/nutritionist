//ServiceDetailsPage
import { useEffect } from 'react'
import './ServiceDetailsPageTitle.css'
import Container from '../../UI-Kit/Container/Container'

export default function ServiceDetailsPageTitle() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
      <Container as='section' baseClassName='wrapper' className='aboutMePageTitle__section'>
        <Container as='div' baseClassName='wrapper' className='aboutMePageTitle__wrapper'>
        <Container as='div' baseClassName='container' className='aboutMePageTitle__container'>
        
          <h2 className='aboutMePageTitle__title'>Услуги</h2>
        </Container>

        
        </Container>
      </Container>
    )
}
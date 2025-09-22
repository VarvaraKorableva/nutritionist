import './ContactsTitle.css'
import Container from '../../UI-Kit/Container/Container'

export default function ContactsTitle() {
  return (
    <Container as='section' baseClassName='wrapper' className='ContactsTitle__section'>
      <Container as='div' baseClassName='wrapper' className='ContactsTitle__wrapper'>
      <Container as='div' baseClassName='container' className='ContactsTitle__container'>
        <h2 className='ContactsTitle__title'>Контакты</h2>
      </Container>
      </Container>
    </Container>
  )
}

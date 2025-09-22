import './Contacts.css'
import Heading from '../UI-Kit/Heading/Heading'
import Container from '../UI-Kit/Container/Container'
import contacts from '../../Data/contacts.json'

export default function Contacts() {
    return(
        <Container>
            <p>{contacts[0].tel}</p>
            <p>{contacts[0].instagram}</p>
            <p>{contacts[0].telegram}</p>
        </Container>
    )
}
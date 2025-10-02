//contact Контакты ContactsPage
import Contacts from '../../components/Contacts/Contacts'
import ContactsTitle from '../../components/Contacts/ContactsTitle/ContactsTitle'
import CallToAction from '../../components/CallToAction/CallToAction'

export default  function ContactsPage() {
    return(
        <>
            <ContactsTitle />
            <Contacts />
            <CallToAction />
        </>
    )
}
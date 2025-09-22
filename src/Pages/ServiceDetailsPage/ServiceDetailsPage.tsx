import { useEffect } from 'react'
import './ServiceDetailsPage.css'
//import Container from '../../components/UI-Kit/Container/Container'
import Phrase from '../../components/Phrase/Phrase'
import Services from '../../components/Services/Services'
import ServiceDetailsPageTitle from '../../components/ServiceDetailsPage/ServiceDetailsPageTitle/ServiceDetailsPageTitle'
import Promotion from '../../components/Promotion/Promotion'

export default function ServiceDetailsPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
      <>
        <ServiceDetailsPageTitle />
        <Services></Services>
        <Promotion></Promotion>
        <Phrase />
      </>
    )
}
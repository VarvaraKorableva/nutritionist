import { useEffect } from 'react'
import './ServiceDetailsPage.css'
//import Container from '../../components/UI-Kit/Container/Container'
import Phrase from '../../components/Phrase/Phrase'
import ServiceDetailsPageTitle from '../../components/ServiceDetailsPage/ServiceDetailsPageTitle/ServiceDetailsPageTitle'

export default function ServiceDetailsPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
      <>
        <ServiceDetailsPageTitle />
        <Phrase />
      </>
    )
}
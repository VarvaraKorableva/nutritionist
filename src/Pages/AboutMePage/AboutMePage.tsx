import { useEffect } from 'react'
import './AboutMePage.css'
//import Heading from '../../components/UI-Kit/Heading/Heading'
import Container from '../../components/UI-Kit/Container/Container'
import ForWhom from '../../components/ForWhom/ForWhom'
import AboutMePageTitle from '../../components/About/AboutMePage/AboutMePageTitle/AboutMePageTitle'
import AboutMeInfo from '../../components/About/AboutMePage/AboutMeInfo/AboutMeInfo'
import CallToAction from '../../components/CallToAction/CallToAction'
import CallToActionBeginSection from '../../components/CallToActionBeginSection/CallToActionBeginSection'

//import Phrase from '../../components/Phrase/Phrase'
/*import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';*/

export default function AboutMePage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container as='section' baseClassName='wrapper' className="AboutMePage__section">

        <AboutMePageTitle/>
        <AboutMeInfo/>
        <CallToActionBeginSection />
        <ForWhom/>
        <CallToAction />
        
    </Container>
  )
}
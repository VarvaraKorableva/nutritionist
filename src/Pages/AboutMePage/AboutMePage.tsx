import { useEffect } from 'react'
import './AboutMePage.css'
import Container from '../../components/UI-Kit/Container/Container'
import ForWhom from '../../components/ForWhom/ForWhom'
import AboutMePageTitle from '../../components/About/AboutMePage/AboutMePageTitle/AboutMePageTitle'
import AboutMeInfo from '../../components/About/AboutMePage/AboutMeInfo/AboutMeInfo'
import CallToAction from '../../components/CallToAction/CallToAction'
import CallToActionBeginSection from '../../components/CallToActionBeginSection/CallToActionBeginSection'
import Diplomas from '../../components/Diplomas/Diplomas'

type AboutMePageProps = {
  handleCardClick: () => void;
};

export default function AboutMePage({handleCardClick}: AboutMePageProps) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container as='section' baseClassName='wrapper' className="AboutMePage__section">

        <AboutMePageTitle/>
        <AboutMeInfo/>
        <CallToActionBeginSection />
        <ForWhom/>
        <Diplomas handleCardClick={handleCardClick}/>
        <CallToAction />
        
    </Container>
  )
}
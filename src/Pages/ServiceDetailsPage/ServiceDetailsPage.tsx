import './ServiceDetailsPage.css'
import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Heading from '../../components/UI-Kit/Heading/Heading'
import FrameSection from '../../components/UI-Kit/Frame/FrameSection'
import tariffs from '../../Data/tariffs.json'

export default function ServiceDetailsPage() {
  const { slug } = useParams();
  const oneTariff = tariffs.find(t => t.slug === slug);

  if (!oneTariff) {
    return <Navigate to="*" />
  }  

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="blogPostPage__wrapper">
      <FrameSection>
        <Heading>{oneTariff.title}</Heading>

        <p className="services__cardText">{oneTariff.description}</p>
        {oneTariff.details.map((detail, index) => 
          <p className="services__cardText" key={index}>
            <strong>{detail.label}:</strong> {detail.value}
          </p>
        )}
        
      </FrameSection>  
    </section>  
  )
}
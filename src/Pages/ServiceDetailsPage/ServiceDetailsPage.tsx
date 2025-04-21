import './ServiceDetailsPage.css'
import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
//import Heading from '../components/UI-Kit/Heading/Heading'
//import FrameSection from '../components/UI-Kit/Frame/FrameSection'
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
    <div className="blogPostPage__wrapper">
      
      {oneTariff.title}
        
    </div>  
  )
}
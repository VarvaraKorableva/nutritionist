import { useEffect } from 'react'
//import './AboutMePage.css'
//import Heading from '../../components/UI-Kit/Heading/Heading'
import Container from '../../components/UI-Kit/Container/Container'
import Reviews from '../../components/Reviews/Reviews'

export default function ReviewsPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Reviews></Reviews>
  )
}
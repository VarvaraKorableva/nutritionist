import { useEffect } from 'react'
import ReviewsTitle from '../../components/Reviews/ReviewsTitle/ReviewsTitle'
import Reviews from '../../components/Reviews/Reviews'
import CallToAction from '../../components/CallToAction/CallToAction'

export default function ReviewsPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
      <>
      <ReviewsTitle/>
      <Reviews />
      <CallToAction />
      </>
    
  )
}
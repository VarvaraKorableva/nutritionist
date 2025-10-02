import { useEffect } from 'react'
import Hero from '../../components/Hero/Hero'
import MyPrinciples from '../../components/MyPrinciples/MyPrinciples'
import About from '../../components/About/About'
import Mission from '../../components/Mission/Mission'
import CallToAction from '../../components/CallToAction/CallToAction'

export default function MainPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
        <Hero />
        <MyPrinciples />
        <About />
        <Mission />
        <CallToAction />
    </>
  )
}
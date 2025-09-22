import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import MyPrinciples from './components/MyPrinciples/MyPrinciples'
import BlogPostPage from './Pages/BlogPostPage'
import ServiceDetailsPage from './Pages/ServiceDetailsPage/ServiceDetailsPage'
import AboutMePage from './Pages/AboutMePage/AboutMePage'
import ReviewsPage from './Pages/ReviewsPage/ReviewsPage'
import ContactsPage from './Pages/ContactsPage/ContactsPage'
import Mission from './components/Mission/Mission'
import CallToAction from './components/CallToAction/CallToAction'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

import './index.css'

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/nutritionist/"
          element={
            <>
              <Hero />
              <MyPrinciples />
              <About />
              <Mission />
              <CallToAction />
            </>
          }
        />
        <Route 
          path="/blog/:slug" 
          element={<BlogPostPage />} 
        />
        <Route 
          path="/services" 
          element={<ServiceDetailsPage />} 
        />
        <Route 
          path="/about-me" 
          element={<AboutMePage />} 
        />

        <Route 
          path="/reviews-page" 
          element={<ReviewsPage />} 
        />

        <Route 
          path="/contacts-page" 
          element={<ContactsPage />} 
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import MyPrinciples from './components/MyPrinciples/MyPrinciples'
//import Services from './components/Services/Services'
//import ReviewsSlider from './components/ReviewsSlider/ReviewsSlider'
//import Blog from './components/Blog/Blog'
import BlogPostPage from './Pages/BlogPostPage'
import ServiceDetailsPage from './Pages/ServiceDetailsPage/ServiceDetailsPage'
import AboutMePage from './Pages/AboutMePage/AboutMePage'
import Mission from './components/Mission/Mission'
import ForWhom from './components/ForWhom/ForWhom'
import Phrase from './components/Phrase/Phrase'
import HowWeWork from './components/HowWeWork/HowWeWork'
import YourResults from './components/YourResults/YourResults'
import Results from './components/YourResults/Results/Results'
import Education from './components/Education/Education'
// import Contact from './components/Contact/Contact'
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
              <About />
              <MyPrinciples />
              <Mission />
              <ForWhom/>
              <Phrase />
              <HowWeWork />
              <Results />
              <YourResults />
              <Education />
              {/*<ReviewsSlider/>
              <Services /> 
              <Blog/>
              
              <Results />*/}
            </>
          }
        />
        <Route 
          path="/blog/:slug" 
          element={<BlogPostPage />} 
        />
        <Route 
          path="/services/:slug" 
          element={<ServiceDetailsPage />} 
        />
        <Route 
          path="/about-me" 
          element={<AboutMePage />} 
        />
        {/* Пример: отдельная страница */}
        {/* <Route path="/thank-you" element={<ThankYouPage />} /> */}
      </Routes>

      <Footer />
    </>
  )
}

export default App
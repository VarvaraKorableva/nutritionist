import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import ReviewsSlider from './components/ReviewsSlider/ReviewsSlider'


// import Testimonials from './components/Testimonials/Testimonials'
// import Contact from './components/Contact/Contact'
// import Footer from './components/Footer/Footer'

import './index.css'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <ReviewsSlider/>
              
              {/* <Testimonials />
              <Contact /> */}
            </>
          }
        />

        {/* Пример: отдельная страница */}
        {/* <Route path="/thank-you" element={<ThankYouPage />} /> */}
      </Routes>

      {/* <Footer /> */}
    </>
  )
}

export default App
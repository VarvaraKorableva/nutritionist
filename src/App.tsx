import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import ReviewsSlider from './components/ReviewsSlider/ReviewsSlider'
import Blog from './components/Blog/Blog'
import BlogPostPage from './Pages/BlogPostPage'
import ServiceDetailsPage from './Pages/ServiceDetailsPage/ServiceDetailsPage'

// import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

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
              {/*<ReviewsSlider/>*/}
              <Blog/>
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
        {/* Пример: отдельная страница */}
        {/* <Route path="/thank-you" element={<ThankYouPage />} /> */}
      </Routes>

      <Footer />
    </>
  )
}

export default App
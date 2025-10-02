import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Header from './components/Header/Header'
import MainPage from './Pages/MainPage/MainPage'
import ServiceDetailsPage from './Pages/ServiceDetailsPage/ServiceDetailsPage'
import AboutMePage from './Pages/AboutMePage/AboutMePage'
import ReviewsPage from './Pages/ReviewsPage/ReviewsPage'
import ContactsPage from './Pages/ContactsPage/ContactsPage'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import ImagePopup from './components/Popups/ImagePopup'

import './index.css'

function App() {
  const [imgPopup, setImgPopup] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({})

  function handleImgPopupOpen() {
    setImgPopup(true)
  }

  function closeAllPopups() {
    setImgPopup(false)
  }

  function handleCardClick(img: any) {
    setSelectedCard(img);
    handleImgPopupOpen()
  }

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={<MainPage/>}>
        </Route>
        <Route 
          path="/services" 
          element={<ServiceDetailsPage />} 
        />
        <Route 
          path="/about-me" 
          element={<AboutMePage handleCardClick={handleCardClick}/>} 
        />

        <Route 
          path="/reviews-page" 
          element={<ReviewsPage />} 
        />

        <Route 
          path="//contacts-page" 
          element={<ContactsPage />} 
        />
      </Routes>

      <ImagePopup 
          diploma={selectedCard}
          imgPopup={imgPopup}
          onClose={closeAllPopups}
      />
      <Footer />
    </>
  )
}

export default App
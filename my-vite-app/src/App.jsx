import { useState } from 'react'

import AuctionHomePage from './pages/home'
// import Navbar from './component/nav'
import FeaturedCategoriesSection from './component/catagories'
import TestimonialsSection from './component/test'
import FAQNewsletterSection from './component/faq'
import MobileAppSection from './component/mobile'
import Footer from './component/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar /> */}
    <AuctionHomePage />
    <FeaturedCategoriesSection />
    <TestimonialsSection />
    <FAQNewsletterSection />
    <MobileAppSection />
    <Footer />
  
    </>
  )
}

export default App

import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext' // Ensure you have this file from previous steps
import ScrollToTop from './componets/ScrollToTop' // Import the new scroll fixer

// Pages
import Home from './pages/Home'
import FullGallery from './pages/FullGallery'
import FullMenu from './pages/FullMenu'
import FullShop from './pages/FullShop'
import FullFAQ from './pages/FullFAQ'
import FullFranchise from './pages/FullFranchise'
import BookTable from './pages/BookTable'
import Checkout from './pages/Checkout';

function App() {
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <CartProvider> {/* FIX: This wraps the whole app */}
      <BrowserRouter>
        <ScrollToTop /> {/* FIX: This resets scroll on page change */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<FullGallery />} />
          <Route path="/menu" element={<FullMenu />} />
          <Route path="/shop" element={<FullShop />} />
          <Route path="/faqs" element={<FullFAQ />} />
          <Route path="/franchise" element={<FullFranchise />} />
          <Route path="/book-table" element={<BookTable />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
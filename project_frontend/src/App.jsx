// src/App.jsx
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext' 
import ScrollToTop from './componets/ScrollToTop' 

// Pages
import Home from './pages/Home'
import FullMenu from './pages/FullMenu'
import ItemDetail from './pages/ItemDetail'
import ArtDetail from './pages/ArtDetail'
import FullGallery from './pages/FullGallery'
import FullShop from './pages/FullShop'
import ShopItemDetail from './pages/ShopItemDetail' // <--- IMPORT THIS
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
    <CartProvider> 
      <BrowserRouter>
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<FullGallery />} />
          <Route path="/gallery/:id" element={<ArtDetail />} />
          
          <Route path="/menu" element={<FullMenu />} />
          <Route path="/menu/:id" element={<ItemDetail />} />

          <Route path="/shop" element={<FullShop />} />
          <Route path="/shop/:id" element={<ShopItemDetail />} /> {/* <--- ADD THIS ROUTE */}

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
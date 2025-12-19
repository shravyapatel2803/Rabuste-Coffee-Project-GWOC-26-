import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FullGallery from './pages/FullGallery'
import FullMenu from './pages/FullMenu'
import FullShop from './pages/FullShop'
import FullFAQ from './pages/FullFAQ'
import FullFranchise from './pages/FullFranchise'
import BookTable from './pages/BookTable' // Import the new page

function App() {
  // Theme logic...
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<FullGallery />} />
        <Route path="/menu" element={<FullMenu />} />
        <Route path="/shop" element={<FullShop />} />
        <Route path="/faqs" element={<FullFAQ />} />
        <Route path="/franchise" element={<FullFranchise />} />
        <Route path="/book-table" element={<BookTable />} /> {/* New Route */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
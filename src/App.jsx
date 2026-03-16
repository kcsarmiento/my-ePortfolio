import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import OutputsPage from './pages/OutputsPage'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/outputs" element={<OutputsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App

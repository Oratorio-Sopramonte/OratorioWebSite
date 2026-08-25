import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Booking from './pages/Booking'
import Surveillance from './pages/Surveillance'
import Membership from './pages/Membership'
import Contact from './pages/Contact'
import Gita from './pages/Gita'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* Placeholder for other routes */}
        <Route path="prenota-sale" element={<Booking />} />
        <Route path="sorveglianza" element={<Surveillance />} />
        <Route path="tesseramento" element={<Membership />} />
        <Route path="contatti" element={<Contact />} />
        <Route path="gita-val-di-fumo" element={<Gita />} />
      </Route>
    </Routes>
  )
}

export default App

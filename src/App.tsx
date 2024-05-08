import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Header from './components/Header'
import Footer from './components/Footer'
import Staking from './components/Staking'

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/staking' element={<Staking />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './components/Landing'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Wishlist from './pages/Wishlist'
import Sign from './pages/Sign'
import Forher from './pages/Forher'
import Forhim from './pages/Forhim'




function App() {
  

  return (
    <>
     <Header/>
  
     <Routes>
      <Route path='/' element ={<Landing/>}/>
      <Route path='Wishlist' element={<Wishlist/>}></Route>
      <Route path='Sign' element={<Sign/>}></Route>
      <Route path='Forher' element={<Forher/>}></Route>
      <Route path='Forhim' element={<Forhim/>}></Route>
     </Routes>
     <Footer/>
    </>
  )
}

export default App

import './App.css'
import Footer from './components/Footer'
import Gallary from './components/Gallary'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <Gallary />
      <Footer />
    </>
  )
}

export default App

import React from 'react'
import Header from './components/Partials/Header'
import Footer from './components/Partials/Footer'
import Home from './components/Pages/Home'
import SinglePage from './components/Pages/SinglePage'

import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Header/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/blog/:id" element={<SinglePage/>}/>
        </Routes>
      <Footer/>
      
    </div>

  )
}

export default App

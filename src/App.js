import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './routes/Home'
import About from './routes/About'
import Navigation from './components/Navigation'
import Detail from './routes/Detail'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes /* 클릭 했을때 해당 페이지로 이동 */> 
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
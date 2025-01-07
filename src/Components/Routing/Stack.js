import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Portfolio from './Portfolio'
import About from './About'
import ClientAlbum from './ClientAlbum'
import Contact from './Contact'
import Invalid from './Invalid'

const Stack = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/clientAlbum" element={<ClientAlbum />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Invalid />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Stack

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import React, { useEffect } from 'react';

import './app.css'
import Home from './pages/Home';
import Books from './pages/Books';
// import Authors from './pages/Authors';
import Header from './Header';
import BookDetails from './components/BookDetails';




function App() {
  return (
    <BrowserRouter>
    <header>
        <Header/>
    </header>
    <main> 
    <Routes>
                <Route path="/" element = {<Home/>} />
                <Route path="/books" element = {<Books/>} />
                <Route path="/books/:id" element= {<BookDetails/>}/>
                {/* <Route path="/authors" element = {<Authors/>} /> */}
    </Routes>
    </main>
  </BrowserRouter>
  )
}

export default App

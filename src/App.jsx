import React from 'react'
import Home from './views/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link } from "react-router-dom";


const App = () => {
  return( <BrowserRouter>
    <Home />
    </BrowserRouter>
  )
    }

export default App
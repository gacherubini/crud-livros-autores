import React from 'react'
import { Link } from 'react-router-dom';

import './app.css'
const Header = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/books">books</Link>
            </li>
            <li>
                <Link to="/authors">authors</Link>
            </li>
        </ul> 
    </nav>
  )
}

export default Header
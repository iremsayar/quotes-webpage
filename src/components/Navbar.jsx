import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'


function Navbar() {
    const { theme } = useContext(ThemeContext)
    
    const [menu, setMenu]= useState(false)
    return (
        <div>
            <nav className={`navbar navbar-expand-lg ${theme.navbar} shadow-lg`}>
  <div className="container-fluid">
                    <Link to="/" className="navbar-brand fs-1 fw-light fst-italic" href="/">Quotes</Link>
                    <button
                        onClick={() => {
                            setMenu(!menu)
                        }}
                        className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
                       
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link fs-4 fw-lighter fst-italic" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="about" className="nav-link fs-4 fw-lighter fst-italic" href="#">About</Link>
        </li>
        
      </ul>
    </div>
  </div>
            </nav>
            <div className={`${menu ?  '': 'd-none'}`}>
                    <ul className="list-group list-group-flush  ">
                            <li class="list-group-item list-group-item-dark text-center">
                                <Link className='nav-link text-dark fs-4 fw-lighter fst-italic' to="/">Home</Link>
                            </li>
                            <li class="list-group-item list-group-item-dark text-center">
                                <Link className='nav-link text-dark fs-4 fw-lighter fst-italic' to="about">About</Link>
                            </li>
                            
                        </ul>
                    </div>   
        </div>
    )
}

export default Navbar

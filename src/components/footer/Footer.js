import "./Footer.css"
import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="container">
      <footer>  
        <div className="footer-icons">
          <Link to="https://github.com/Fredrikdeveloper" target="_blank"><i class="fa-brands fa-github"></i></Link>
          <Link to="https://www.instagram.com/faxriddin_official12/" target="_blank"><i class="fa-brands fa-square-instagram"></i></Link>
        </div>
        <div className="footer-text">
          <h6>+998997223562</h6>
        </div>
      </footer>
    </div>
  )
}

export default Footer
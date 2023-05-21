import React from 'react'
import { Link } from 'react-router-dom'
import "./Project.css"
import img from "../../images/part-img2.png"
import img2 from "../../images/img2.jpg"
import img3 from "../../images/img5.png"
const Project = () => {
  return (
    <div className='projects-body'>
      <h3 className='text-center text-light mt-5'>Projects</h3>
      <h5 className='text-center text-light my-5'>Things I’ve built so far</h5>
      <div>
      <div className='Project-groups container'>
            <Link target='_blank' to="https://vita-juice.netlify.app/"  className='Project-group-card'>
            <img src={img} alt='' />
            </Link>
            <Link to="https://razer-shops.netlify.app/" target='_blank' className='Project-group-card'>
            <img src={img2} alt='' />
            </Link>
            <Link target='_blank' to="https://barber-shok-uz.netlify.app/home" className='Project-group-card'>
            <img src={img3} alt='' />
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Project
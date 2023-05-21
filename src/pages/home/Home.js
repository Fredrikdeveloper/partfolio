import React from 'react'
import Project from '../../components/project/Project'
import "./Home.css"
import Technology from '../../components/technology/Technology'
import Header from '../../components/header/Header'
const Home = () => {
  return (
    <div>
        <Header />
        <Project />
        <Technology />
    </div>
  )
}

export default Home
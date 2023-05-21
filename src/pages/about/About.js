import "./About.css"
import React from 'react'

const About = () => {
  return (
    <div className="about-body">
      <div className="about-menu">
      <div className="about-using">
        <h2 className="about-text">About Me</h2>
        <p className="about-p-text">Hello, I'm a front end developer. I completed a course in <br /> programming from IT ACADEMY. <br /> I know Html, Css, Bootstrap 5 JavaScript, React and responsive layout. <br /> I like learning new knowledge and development</p>
      </div>
      <div>
        <h2 className="about-text">Work Experience:</h2>
        <h5 className="about-p-text">no work experience</h5>
      </div>
      <div>
        <h2 className="about-text">Education</h2>
        <h5 className="about-p-text">IT ACADEMY</h5>
        <p className="about-p-text">Oct 2023 - May 2023</p>
      </div>
      </div>
    </div>
  )
}

export default About
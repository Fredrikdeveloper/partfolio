import "./Header.css"
import React from 'react'


const Header = () => {
  return (
    <div className="header-body container">
      <div className="header-text">
        <h1>Hi , My name is <br /> Sayriddinov Faxriddin <br />I Junior Frontend <br /> Developer</h1>
      </div>
       <div className="header-img">
        <img src="https://mattfarley.ca/img/mf-avatar.svg" alt="" />
       </div>
    </div>
  )
}

export default Header
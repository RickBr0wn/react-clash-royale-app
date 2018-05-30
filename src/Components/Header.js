import React from 'react'

const Header = () => {
  return(
    <div className="header">
      <div className="container">
        <img src={require("../Images/Logo.png")} alt="Clash Royale Logo"/>
        <h1>PLAYER INFORMATION APP</h1>
      </div>
    </div>
  )
}

export default Header
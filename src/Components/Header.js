import React from 'react'

const Header = () => {
  return(
    <div className="header">
      <div className="container">
        <img src={require("../Images/Logo.png")} alt="Clash Royale Logo"/>
      </div>
    </div>
  )
}

export default Header
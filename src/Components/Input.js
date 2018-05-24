import React from 'react'

const Input = props =>{
  return(
    <div className="container">
      <div className="input-panel">
        <form>
          <label>
            Please enter your clan tag 
          </label>
          <input  name="playerName"
                  value={props.playerNameInput}
                  onChange={props.handlePlayerNameInput} />
        </form>
      </div>
    </div>
  )
}

export default Input
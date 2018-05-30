import React from 'react'

// Images
import Button from '../Images/BattleButton.png'

const Input = props =>{
  return(
    <div className="container">
      <div className="input-row">
        <form>
          <input  name="playerName"
                  placeholder="Please enter your clan tag"
                  value={props.playerNameInput}
                  onChange={event => props.handleInput(event, 'playerNameInput')} />
          
          {/* Need to sort this display: inline-block???? */}
          <div className="test">
            <img  className="battle-button" 
                  src={Button}
                  alt="Battle Button"
                  onClick={props.onSubmit} />
          </div>

        </form>
      </div>
    </div>
  )
}

export default Input
import React from 'react'

const CurrentDeck = props =>{
  const { currentDeck } = props.data
  console.log(currentDeck)

  return(
    <div>
      <h2>Current Deck</h2>
      <ul>
        {
          currentDeck.map((item, index) => {
            return(
              <li key={index}>
                {/* {item.name} */}
                <img  className="current-deck-icon" 
                      src={item.icon} 
                      alt={item.name} />
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default CurrentDeck
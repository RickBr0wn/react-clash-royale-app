import React from 'react'

// Components
import Stats from './Stats'
import CurrentDeck from './CurrentDeck'
import FreeChestCycle from './FreeChestCycle'
import ArenaDetails from './ArenaDetails'

const Container = props =>{
  return(
    <div className="container">
      <div className="container-panel">
        <Stats data={props.data} />
        <CurrentDeck data={props.data} />
        <FreeChestCycle data={props.data} />  
        <ArenaDetails data={props.data} /> 
      </div>
    </div>
  )
}

export default Container
import React from 'react'

// Components
import Stats from './Stats'
import CurrentDeck from './CurrentDeck'

const Container = props =>{
  return(
    <div className="container">
      <div className="container-panel">
        <Stats data={props.data} />
        <CurrentDeck data={props.data} />     
      </div>
    </div>
  )
}

export default Container
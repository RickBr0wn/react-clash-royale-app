import React from 'react'

const Container = props =>{
  return(
    <div className="container">
      <div className="container-panel">
        <h1>data</h1>        
        <p>{props.data.name}</p>
        <ul>
          {/* <li>{ArenaArena}</li> */}
        </ul>
      </div>
    </div>
  )
}

export default Container
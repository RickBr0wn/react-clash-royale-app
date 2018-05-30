import React from 'react'

const Stats = props =>{
  const { name, trophies, arena } = props.data
  console.log(arena.name)
  return(
    <div>
      <h2>Player Information</h2>
      <div className="player-information">
        <ul>
          <li>Name: {name}</li>
          <li>Trophies: {trophies}</li>
          <li>Arena: {arena.arenaID}</li>
          <li>Arena Name: {arena.name}</li>
          <li>Min trophies: {arena.trophyLimit}</li>
        </ul>
      </div>
    </div>
  )
}

export default Stats
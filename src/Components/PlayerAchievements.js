import React from 'react'

const PlayerAchievements = props =>{
  const { achievements } = props.data
  return(
    <div>
      <h2>Achievements</h2>
      <ul>
        {
          achievements.map((item, index) => {
            return(
              <li key={index}>
                {item.name}
                {item.stars}
                {item.value}
                {item.target}
                {item.info}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default PlayerAchievements
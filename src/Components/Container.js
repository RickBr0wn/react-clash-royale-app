import React from 'react'

const Container = props =>{
  console.log(props)
  return(
    <div className="container">
      <div className="container-panel">
        <h1>data</h1>
        <p>{props.data.name}</p>
        <p>{props.data.trophies}</p>
        {
          // props.data.arena.map(item => <p key={item.id} data={item} />)
          // console.log(typeof(props.data.arena))
        }
        {/* <p>{props.data.arena.name}</p> */}
        
      </div>
    </div>
  )
}

export default Container
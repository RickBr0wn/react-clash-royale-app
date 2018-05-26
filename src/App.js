// https://api.royaleapi.com/player/#RYULJJJJ

import React from 'react'

// Data
import obj from './Data/api_object'

// Components
import Header from './Components/Header'
import Input from './Components/Input'
import Container from './Components/Container'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      playerNameInput: '',
      data: []
    }
  }

  fetchAPI = playerName => {
    fetch("https://api.royaleapi.com/player/" + playerName, obj)
      .then(result => result.json())
      .then(parsedJSON => {
          console.log(parsedJSON)
          this.setState({
            isLoaded: true,
            data: parsedJSON
          })
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  handleInput = (event, input) =>{
    this.setState({[input]: event.target.value})
  }

  handleHashInUserName = name => name.charAt(0) === '#' 

  removeHashFromName = name => name.slice(1)

  onSubmit = event => {
    event.preventDefault()
    if(this.handleHashInUserName(this.state.playerNameInput)){
      this.fetchAPI(this.removeHashFromName(this.state.playerNameInput))
    }else{
      this.fetchAPI(this.state.playerNameInput)
    }
  }
  
  render() {
    return(
      <div className="input">
        <Header />
        <Input  data={this.state.data}
                playerNameInput={this.state.playerNameInput}
                handleInput={this.handleInput}
                onSubmit={this.onSubmit} />
        <Container data={this.state.data} />
      </div>
    )
  }
}

export default App
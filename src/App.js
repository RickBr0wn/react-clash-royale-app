// https://api.royaleapi.com/player/RYULJJJJ

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

  componentDidMount() {
    // fetch("https://api.royaleapi.com/top/players?/:cc?", obj)
    //   .then(result => result.json())
    //   .then(parsedJSON => {
    //       this.setState({
    //         isLoaded: true,
    //         data: parsedJSON
    //       })
    //     },
    //     error => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       })
    //     }
    //   )
  }

  handlePlayerNameInput = event =>
    this.setState({playerNameInput: event.target.value})
  
  render() {
    console.log(this.state.data)
    return(
      <div className="input">
        <Header />
        <Input  data={this.state.data}
                playerNameInput={this.state.playerNameInput}
                handlePlayerNameInput={this.handlePlayerNameInput} />
        <Container />
      </div>
    )
  }
}

export default App
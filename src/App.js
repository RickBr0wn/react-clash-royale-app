import React from 'react'

// Data
import obj from './Data/api_object'

// Components
import Header from './Components/Header'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {
    fetch("https://api.royaleapi.com/player/RYULJJJJ", obj)
      .then(result => result.json())
      .then(parsedJSON => {
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
  
  render() {
    console.log(this.state.data)
    return(
      <Header />
    )
  }
}

export default App;
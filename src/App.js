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

  // componentDidMount(){
  //   axios.get({url: 'https://api.royaleapi.com/player/RYULJJJJ', 
  //               method: 'get',
  //               headers: {'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTU0LCJpZGVuIjoiMjE4NDgyMDM5MTE0OTU2ODAwIiwibWQiOnt9fQ.2r02XaNgEJmBYjX0DIqer2GRMd_GT3zD_gdplhyjdbc'}})
  //                 .then(response => this.setState({ data: response.data.data }))
  //                 .catch(error => console.log('Error fetching and parsing data: ' + error))
  // }

  handleInput = (event, input) =>{
    this.setState({[input]: event.target.value})
  }

  handleHashInUserName = name => name.charAt(0) === '#' 

  removeHashFromName = name => name.slice(1)

  onSubmit = event => {
    event.preventDefault()
    if(this.state.playerNameInput === ''){
      return alert('Please enter a name')
    }
    if(this.handleHashInUserName(this.state.playerNameInput)){
      this.fetchAPI(this.removeHashFromName(this.state.playerNameInput))
    }else{
      this.fetchAPI(this.state.playerNameInput)
    }
  }
  
  render() {
    if(this.state.isLoaded){
      // true
      return(
        <div className="input">
          <Header />
          <Input  className="submit-button"
                  data={this.state.data}
                  playerNameInput={this.state.playerNameInput}
                  handleInput={this.handleInput}
                  onSubmit={this.onSubmit} />
         <Container data={this.state.data} /> 
        </div>
      )
    }else{
      // false
      return(
        <div className="input">
          <Header />
          <Input  className="submit-button"
                  data={this.state.data}
                  playerNameInput={this.state.playerNameInput}
                  handleInput={this.handleInput}
                  onSubmit={this.onSubmit} />
        </div>
      )
    }


    
  }
}

export default App
import React from 'react'

import api_key from './Components/api-key'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      api_key: api_key
    }
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;

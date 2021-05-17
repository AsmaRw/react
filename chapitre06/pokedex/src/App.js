import React from 'react';
import './App.css';
import Box from './componant/Box.jsx';


class App extends React.Component {

  constructor() {
    super()

    this.state = {
      Pokemon: []
    }
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1118&offset=1")
      .then(res => res.json())
      .then(data => {

        this.setState({
          Pokemon: data.results
        })
      })
  }

  render() {
    <div>
      <h1 style={{textAlign: 'center'}}>Pokedex</h1>
      <Box/>
    </div>
  }
}


export default App;

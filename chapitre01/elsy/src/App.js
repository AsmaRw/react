import React from "react";
import './App.css';
import Box from './components/Box';
import './styles/global.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      water: 1.5,
      heart: 120,
      temperature: -10,
      steps: 3000
    }

    this.onHeartChange = this.onHeartChange.bind(this)
    this.onStepsChange = this.onStepsChange.bind(this)
    this.onTempChange = this.onTempChange.bind(this)
    this.calculateWater = this.calculateWater.bind(this)
  }

  onHeartChange(e) {
    this.setState({heart: e.target.value})
    this.calculateWater()
  }
  onStepsChange(e) {
    this.setState({steps: e.target.value})
      this.calculateWater()
  }
  onTempChange(e) {
    this.setState({temperature: e.target.value})
    this.calculateWater()
  }
  calculateWater() {
    let tempw = 20
    let heartw = 80
    let stepw = 0
    if (this.state.temperature > 20) {
    tempw= (this.state.temperature - 20) * 0.02;
    }
    if (this.state.heart > 120) {
    heartw= (this.state.heart - 120) * 0.0008;
    }
    if (this.state.steps > 10000) {
    stepw= (this.state.steps - 10000) * 0.00002;
    }
    this.setState({ water: (1.5 + tempw + heartw + stepw).toFixed(2)})
  }

  render() {
    return (
      <div className='container-fluid' >
        <div className='row'>
          <Box icon="local_drink" color={"#3A85FF"} value={this.state.water} unit="L"></Box>
          <Box icon="directions_walk" color="black" value={this.state.steps} onStepsChange={this.onStepsChange} stepsMin={0} stepsMax={50000} unit="steps"></Box>
          <Box icon="favorite" color="red" value={this.state.heart} onHeartChange={this.onHeartChange} heartMin={80} heartMax={180} unit="bpm"></Box>
          <Box icon="wb_sunny" color="yellow" value={this.state.temperature} onTempChange={this.onTempChange} tempMin={20} tempMax={40} unit="°C"></Box>

        </div>
      </div>
    );
  }

}
export default App;


import React from 'react'
import './App.css'
import Counter from './compenents/counter.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0
    }
  }

  decreaseCount = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  };
  increaseCount = () => {
    if (this.state.count < 100) {
      this.setState({
        count: this.state.count + 1,
        count2: this.state.count2 + 1
      });
    }
  };
  decreaseCount2 = () => {
    if (this.state.count2 > 0) {
      this.setState({
        count2: this.state.count2 - 1,
        count: this.state.count - 1
      });
    }
  };
  increaseCount2 = () => {
    if (this.state.count < 100) {
      this.setState({
        count2: this.state.count2 + 1
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>

        <Counter count={this.state.count}
          removeFunction={this.decreaseCount}
          addFunction={this.increaseCount}
          count2={this.state.count2}
          removeFunction2={this.decreaseCount2}
          addFunction2={this.increaseCount2} />
      </div>
    )
  }
}

export default App;
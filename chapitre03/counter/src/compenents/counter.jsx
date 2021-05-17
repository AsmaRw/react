import React from 'react'


class Counter extends React.Component {

    render() {
      return (
        <div>
        <h2>{this.props.count}</h2>
        <button type="button" class="btn btn-dark" onClick={this.props.removeFunction}>-</button>
        <button type="button" class="btn btn-primary" onClick= {this.props.addFunction}>+</button>
        <br/>
        <h2>{this.props.count2}</h2>
        <button type="button" class="btn btn-dark" onClick={this.props.removeFunction2}>-</button>
        <button type="button" class="btn btn-primary" onClick= {this.props.addFunction2}>+</button>
        </div>
      )
    };
  }
  
  export default Counter;




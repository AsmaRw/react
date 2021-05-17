import React, { Component } from 'react';
import Movies from './Movies.json';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      items: [Movies]
    }
    this.addMovies = this.addMovies.bind(this)
  }

  addMovies(elem) {

    this.setState({
        items: elem.value.target
    })
}


  render() {
    console.log(Movies);
    return (
      
      <BrowserRouter>
        <div>
          <h1> Movies </h1>
          <nav>
            <ul>
              <li><Link to="/">Movies</Link></li>
              <li><Link to="/A Wrinkle in Time">A Wrinkle in Time</Link></li>
              <li><Link to="/The Strangers: Prey at Night">The Strangers: Prey at Night</Link></li>
              <li><Link to="/The Hurricane Heist">The Hurricane Heist</Link></li>
              <li><Link to="/Gringo">Gringo</Link></li>
              <li><Link to="/Thoroughbreds">Thoroughbreds</Link></li>
              <li><Link to="/The Leisure Seeker">The Leisure Seeker</Link></li>
              <li><Link to="/Black Panther">Black Panther</Link></li>
              <li><Link to="/Red Sparrow">Red Sparrow</Link></li>
            </ul>
          </nav>

          <Switch>
          <Route exact path="/" render={() => <Movies addMovies={this.addMovies} />} ></Route>
          </Switch>

          </div>
        </BrowserRouter >

);
}
}

export default App;
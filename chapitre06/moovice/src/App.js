import React, { Component } from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'
import Home from './views/Home.jsx'
import Favorite from './views/Favorite.jsx'
import Popularbattle from './views/Popularbatlle.jsx'
import Weekly from './views/Weekly'
import Popular from './views/Popular'
import Weeklybattle from './views/Weeklybattle.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
            <div className="container-fluid">
              <ul className="justify-content-center nav nav-tabs">
                <li><Link className="dropdown-item" to="/">Home</Link></li> 
                <li><Link className="dropdown-item" to="/Weekly">Weekly</Link></li>
                <li><Link className="dropdown-item" to="/Weeklybattle">Weekly-Battle</Link></li>
                <li><Link className="dropdown-item" to="/Popular">Popular</Link></li>
                <li><Link className="dropdown-item" to="/Popularbattle">Popular-Battle</Link></li>
                <li><Link className="dropdown-item" to="/Favorite ">Favorite </Link></li>
              </ul>
            </div>
            </nav>

            <Switch> 
              <Route exact path="/" component={Home} /> 
              <Route path="/Weekly" component={Weekly} />
              <Route path="/Weeklybattle" component={Weeklybattle} />
              <Route path="/Popular" component={Popular} />
              <Route path="/Popularbattle" component={Popularbattle} />
              <Route path="/Favorite " component={Favorite} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
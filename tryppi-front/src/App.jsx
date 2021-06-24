import React from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Admin from './pages/Admin'

function App() {

    const logout = () => {
        localStorage.removeItem("token")
    }

    return (
        <BrowserRouter> 
            <div className="container">
                <nav> 
                    <ul>
                        <li><Link to="/signup">Signup</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/admin">Admin</Link></li>
                        <li><a href="" onClick={logout}>Logout</a></li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/admin" component={Admin} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
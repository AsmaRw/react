import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Form from './compenant/Form.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      Password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeP = this.handleChangeP.bind(this)
  }

  handleChange(e) {
    if (e.target.value === /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) {
      this.setState({ Email: 'valid' })
      return this.state.Email
    } else {
      this.setState({ Email: 'not-valid' })
      return this.state.Email
    }
  }
  handleChangeP(e) {
    if (e.target.value === /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/) {
      this.setState({ Password: 'valid' })
      return this.state.Password
    } else {
      this.setState({ Password: 'not-valid' })
      return this.state.Password
    }
  }


  render() {
    return (
        <div class = 'offset-3 col-6'>
          <h1 style={{ fontSize: 60, textAlign: 'center' }}>Login</h1>
          <form style={{ width: 700 }}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
              <label class="form-check-label" for="exampleCheck1">Remember me</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
    );
  }
}

export default App;
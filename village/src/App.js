import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: ''
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            this.setState({smurfs: res.data});
        }).catch(err => console.log(err));
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <div className="NavBar">
          <NavLink exact to="/" activeClassName="nav-active">Home</NavLink>
          <NavLink to="/smurf-form" activeClassName="nav-active">Add Smurf</NavLink>
        </div>
        <Route path="/smurf-form" render={props => <SmurfForm {...props} />} />
        <Route path="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs} /> } />
      </div>
    );
  }
}

export default App;

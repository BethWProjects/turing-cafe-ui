import React, { Component } from 'react';
import fetchData from '../../apiCalls'
import Reservations from '../Reservations/Reservations';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations:[]
    }
  }

  componentDidMount() {
   fetchData().then(data => this.setState({
      reservations: data
    }))
    .catch(error => this.setState({error: error}))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Reservations reservations={this.state.reservations}/>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;

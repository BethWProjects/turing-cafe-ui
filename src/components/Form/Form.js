import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '', 
            date: '', 
            time: '',
            number: ''   
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    submitIdea = event => {
        event.preventDefault()
        const newReservation = {
          id: Date.now(),
          ...this.state 
        }
        this.props.addReservation(newReservation)
        this.clearInputs()
      }

      clearInputs = () => {
        this.setState({ name: '', date: '', time: '', number: '' });
      }

    render() {
        return (
            <form>
                <input
                type="text"
                placeholder='Name'
                name='name'
                value={this.state.name}
                onChange={event => this.handleChange(event)}
                />
                <input
                type="text"
                placeholder='Date'
                name='date'
                value={this.state.date}
                onChange={event => this.handleChange(event)}
                />
                <input
                type="text"
                placeholder='Time'
                name='time'
                value={this.state.time}
                onChange={event => this.handleChange(event)}
                />
                <input
                type="text"
                placeholder='Number'
                name='number'
                value={this.state.number}
                onChange={event => this.handleChange(event)}
                />

                <button className="submit" onClick={event => this.submitIdea(event)}>Submit</button>
            </form>
        )
    }
}

export default Form
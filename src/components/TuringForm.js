import React, { Component } from 'react';
import './turingForm.css';

class TuringForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quote: '',
      superlative: '',
      role: 'staff'
    }
  }

  enterInfo = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitNewMember = (event) => {
    event.preventDefault();
    let memberObj = {
      name: this.state.name,
      quote: this.state.quote,
      superlative: this.state.superlative,
      id: Date.now(),
      role: this.state.role,
      photo: 'https://placekitten.com/200/300'
    }
    this.props.addMember(memberObj, this.state.role);
    this.setState({
      name: '',
      quote: '',
      superlative: ''
    })
  }

  toggleRoleState = memberStatus => {
    this.setState({ role: memberStatus })
  }

  render() {
    return (
      <form className="TuringForm-form">
        <input 
        type="text" 
        placeholder="Name"
        name="name"
        value={this.state.name}
        onChange={event => this.enterInfo(event)} 
        />
        <input 
        type="text" 
        placeholder="Favorite Quote"
        name="quote"
        value={this.state.quote}
        onChange={event => this.enterInfo(event)} 
        />
        <input 
        type="text" 
        placeholder="Superlative"
        name="superlative"
        value={this.state.superlative}
        onChange={event => this.enterInfo(event)} 
        />
        <section className="form-section">
          <label>
            <input onClick={() => this.toggleRoleState('staff')} type="radio" defaultChecked name="memberType" value="staff"/>
            Staff
          </label>
          <label>
            <input onClick={() => this.toggleRoleState('students')}type="radio" name="memberType" value="students"/>
            Student
          </label>
        </section>
        <button className="form-button" onClick={this.submitNewMember}>Add Community Member</button>
      </form>
    )
  }
}

export default TuringForm;
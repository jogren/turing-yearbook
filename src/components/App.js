import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import './App.css';
import TuringForm from './TuringForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  addMember = (newMember, role) => {
    console.log(newMember)
    console.log(role)
    console.log(this.state[role])
    this.setState({ role: this.state[role].push(newMember) })
    // this.setState({ role: [...this.state[role], newMember] });
  }

  deleteMember = (id) => {
    let filteredStaff = this.state.staff.filter(staffMember => staffMember.id !== id);
    let filteredStudents = this.state.students.filter(student => student.id !== id);
    this.setState({ staff: filteredStaff, students: filteredStudents })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Yearbook</h1>
        </header>
        <TuringForm addMember={this.addMember}/>
        <h2>Staff</h2>
        <Cohort people={this.state.staff} deleteMember={this.deleteMember} />
        <h2>Student</h2>
        <Cohort people={this.state.students} deleteMember={this.deleteMember} />
      </div>
    );
  }
}

export default App;

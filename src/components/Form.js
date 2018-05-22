import React from 'react';
import '../style/Form.css';

// Creating a React Form
class FormComp extends React.Component {
  constructor() {
    super();
    // Initialise state for both name variables
    this.state = {
        firstName: '',
        lastName: '',
        fullName: ''
    };
    // Bind methods to FormComp component and update the state with setState()
    this.handleFirstNameChange=this.handleFirstNameChange.bind(this);
    this.handleLastNameChange=this.handleLastNameChange.bind(this);
    this.handleClick=this.handleClick.bind(this);
  }
  // Handler callback functions
  // Define the `onChange` functions and set the state variables
  handleFirstNameChange(event) {
    this.setState({firstName: event.target.value});
  }
  handleLastNameChange(event) {
    this.setState({lastName: event.target.value});
  }
  // Concatenate both first name and last name and display the full name inside the form
  handleClick() {
    const fullName = this.state.firstName + ' ' + this.state.lastName;
    this.setState({Name: fullName});
    console.log('Your full name is ' + fullName)
  }
  // Render the form component `FormComp`
  render() {
    return (
      // Define the HTML code for creating a form
      // Include couple of labels, input boxes, and a button to click
      <div className="form-header">
        <h3>React Form Tutorial</h3>
        <hr />
        <label>First Name: </label>
        <input type="text" value={this.state.firstName} onChange={this.handleFirstNameChange} />
        <br />
        <label>Last Name: </label>
        <input type="text" value={this.state.lastName} onChange={this.handleLastNameChange} />
        <br />
        <input className="btn-input" type="button" onClick={this.handleClick} value="Submit" />
        <hr />
        <h4>Your full name is </h4> {this.state.firstName} {this.state.lastName}
      </div>
    );
  }
}

export default FormComp;

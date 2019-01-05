import React, { Component } from 'react';
import './form.css'

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {name: '', email: ''}
  }

  handleNameChange = event => {
    this.setState({name: event.target.value})
  }

  handleEmailChange = event => {
    this.setState({email: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    const user = {name: this.state.name, email: this.state.email}
    this.props.handleCreateUser(user)
    this.setState({
      name: '',
      email: ''
    })
  }

  handleClick = (event) => {
    this.props.handleOpenForm()
  }

  render() {
    return (
      <div className="container-form">
        <h2>Formulario</h2>
        <form className="form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" id="name" name="name" type="text" value={this.state.name} onChange={this.handleNameChange} required=""/>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" id="email" name="email" type="text" value={this.state.email} onChange={this.handleEmailChange} required=""/>
          </div>
          <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Registrar</button>
        </form>
        <button className="btn btn-add" onClick={this.handleClick}></button>
      </div>
    )
  }
}

export default Form

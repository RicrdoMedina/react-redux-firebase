import React, { Component } from 'react'
import BoxSearch from '../components/box-search';
import { connect } from 'react-redux'
import { searchEntities } from '../../actions/index'

class SearchContainer extends Component {
  state = {
    value: ''
  }
  handleSubmit = event => {
    event.preventDefault()
    this.props.searchEntities(this.input.value)
  }
  setInputRef = element => {
    this.input = element
  }
  handleInputChange = event => {
    this.setState({
      value: event.target.value
    })
  }
  render () {
    return (
      <BoxSearch
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    )
  }
}

const mapDispatchToProps = {
	searchEntities
}

export default connect(null, mapDispatchToProps)(SearchContainer)

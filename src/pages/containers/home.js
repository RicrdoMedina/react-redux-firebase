import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showForm, showSpinner, createUser, loadUsers } from'../../actions/index'
import {init as firebaseInit} from '../../services/firebase'
import _ from 'lodash'
import HomeLayout from '../components/home-layout'
import Form from '../../form/components/form'
import DataContainer from '../components/data-container-layout'
import Table from '../../table/components/table'
import Spinner from '../../widgets/components/spinner'

class Home extends Component {
  constructor (props) {
    super(props);
    firebaseInit();
  }
  componentDidMount = () => {
    this.props.loadUsers()
  }
  handleOpenForm = () => {
    this.props.showForm(!this.props.formVisible)
  }
  handleCreateUser = (user) => {
    this.props.createUser(user)
  }
  render () {
    return (
      <HomeLayout formVisible = {this.props.formVisible}>
        <Form handleOpenForm = {this.handleOpenForm} handleCreateUser = {this.handleCreateUser}/>
        <DataContainer>
          <Table data={this.props.users} search={this.props.search} isSearching={this.props.spinnerVisible}/>
        </DataContainer>
        <Spinner active = {this.props.spinnerVisible}/>
      </HomeLayout>
    )
  }
}

function mapStateToProps (state, props) {
  const data = state.get("data")
  const search = state.get('search').get('value')

  let users = _.map(data.users, (user) => {
    return user
  })

  let searchResults

  if (search) {
		searchResults = users.filter((item) => {
			if (item.email.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())){
				return true
			}
    })

    users = searchResults
  }

  users.reverse()

  return {
    formVisible: state.get('form').get('active'),
    spinnerVisible: state.get('spinner').get('active'),
    users,
    search: state.get('search').get('value')
  }
}

const mapDispatchToProps = {
  showForm,
  showSpinner,
  createUser,
  loadUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

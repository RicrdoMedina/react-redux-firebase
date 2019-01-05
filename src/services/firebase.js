import * as firebase from 'firebase'
import userModel from '../models/user'

let database

export const init = () => {
  let config = {
    apiKey: "AIzaSyB1eD-gNKqaMiwN29AVbYdtuWsxeJMumik",
    authDomain: "react-firebase-4c0dc.firebaseapp.com",
    databaseURL: "https://react-firebase-4c0dc.firebaseio.com",
    projectId: "react-firebase-4c0dc",
    storageBucket: "react-firebase-4c0dc.appspot.com",
    messagingSenderId: "1075610540501"
  }
  firebase.initializeApp(config)
  database = firebase.database()
}

// retrieve from firebase
// return promise object
export const getUsersDB = () => {
  return database.ref('/').once('value')
}

// add new User
export const addUser = (user) => {
  let timeStamp = Date.now()
  let model = userModel(timeStamp, user.name, user.email, timeStamp)
  return database.ref('/users/' + timeStamp).set(model)
}

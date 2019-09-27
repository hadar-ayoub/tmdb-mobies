import React, { Component } from 'react'
import AppNavigator from './routes'
import {AppProvider} from './provider'
export default class App extends Component {

  componentDidMount(){
  }

  render () {
    return (
      <AppProvider>
        <AppNavigator />
      </AppProvider>
    )
  }
}

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import MovieItem from '../../components/movieItem'

export default class Details extends Component {
  constructor (props) {
    super(props)
    this.movies = this.props.navigation.getParam('movie');
  } 

  render () {
    return (
      <MovieItem
        movie={movies}
        onPressItem={() => {}}
      />
    )
  }
}

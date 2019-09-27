import React, { Component } from 'react'
import { View, FlatList, TextInput, Text } from 'react-native'
import styles from './styles'
import { AppConsumer } from '../../provider'
import MovieItem from '../../components/movieItem'

export default class Movies extends Component {
  componentDidMount () {
    this.onPressMovie = this.onPressMovie.bind(this)
  }

  onPressMovie (item) {
    this.props.navigation.navigate('details', { movie: item })
  }

  render () {
    return (
      <AppConsumer>
        {context => {
          let { state, updateKeyword, getMoreMovies } = context
          return (
            <View style={styles.container}>
              <TextInput
                style={{
                  marginTop: 50,
                  marginHorizontal:20,
                  height: 40,
                  borderColor: '#aaa',
                  borderBottomWidth: 1, 
                  padding:3,
                }}
                placeholder={'Rechrche de film Tmdb...'}
                onChangeText={text => {
                  updateKeyword(text)
                }}
                value={state.keyword}
              />
              <FlatList
                data={state.movies}
                onEndReached={getMoreMovies}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                  <MovieItem movie={item} onPressItem={this.onPressMovie} />
                )}
              />
            </View>
          )
        }}
      </AppConsumer>
    )
  }
}

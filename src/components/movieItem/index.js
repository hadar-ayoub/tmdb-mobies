import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import styles from './styles'
import { getPosterUrl } from '../../utils'

export default (MovieItem = props => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => props.onPressItem(props.movie)}
  >
    <View style={styles.movieContainer}>
      <View style={[styles.profileImgContainer]}>
        <Image source={{ uri: getPosterUrl(props.movie.poster_path) }} style={styles.profileImg} />
      </View>
      <View style={styles.content}>
        <Text
          style={{
            fontSize: 15,
            color: '#2f2f33',
            textAlign: 'left',
            lineHeight: 20,
            fontWeight: 'bold'
          }}
        >
          {props.movie.original_title}
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: '#999999',
            textAlign: 'left',
            lineHeight: 22,
            fontWeight: 'normal'
          }}
        >
          {`Votes : ${props.movie.vote_count}`}
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: '#999999',
            textAlign: 'left',
            lineHeight: 22,
            fontWeight: 'normal'
          }}
        >
          {`Pour ${props.movie.adult ? 'Le Public' : 'Les Adultes'}`}
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: '#999999',
            textAlign: 'right',
            lineHeight: 22,
            fontWeight: 'normal'
          }}
        >
          {`Sortie le ${props.movie.release_date}`}
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: '#999999',
            textAlign: 'left',
            lineHeight: 22,
            fontWeight: 'normal'
          }}
        >
          {`OverView: ${props.movie.overview}`}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
))

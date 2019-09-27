import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Movies from './screens/moviesListing'
import Details from './screens/movieDetails'

const navigationOptions = { header: null }
const Navigator = createStackNavigator(
  {
    movies: { screen: Movies, navigationOptions },
    details: { screen: Details, navigationOptions }
  },
  {
    initialRouteName: 'movies',
    mode: 'modal'
  }
)

export default (AppNavigator = createAppContainer(Navigator))

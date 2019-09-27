import { StyleSheet } from 'react-native'
import { widthUnit, heightUnit } from '../../utils'

export default StyleSheet.create({
  profileImgContainer: {
    flex: 1,
    padding: heightUnit(10),
    justifyContent:'flex-start'
  },
  profileImg: {
    flex:1,
    resizeMode: 'contain'
  },
  movieContainer: {
    marginHorizontal: widthUnit(20),
    marginTop: heightUnit(20),
    marginBottom: heightUnit(13.5),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 1
  },
  content: {
    flex: 4,
    justifyContent: 'flex-start'
  }
})

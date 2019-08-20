import { StyleSheet, Dimensions } from 'react-native'

const WIDTH = Dimensions.get('window').width

const posterWidth = WIDTH / 2.5 - 10 // 5 is the margin
const ratio = 300 / 400 // 300 X 400 is the original image width
const posterHeight = posterWidth / ratio

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  title: {
    marginVertical: 5,
    fontWeight: 'bold',
    fontSize: 18,
  },
  posterAndDescription: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  poster: {
    width: posterWidth,
    height: posterHeight,
  },
  description: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
})

export default styles

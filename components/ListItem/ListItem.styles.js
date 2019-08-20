import { StyleSheet, Dimensions } from 'react-native'

const WIDTH = Dimensions.get('window').width

const imageWidth = WIDTH / 2 - 10 // 5 is the margin
const ratio = 300 / 400 // 300 X 400 is the original image width
const imageHeight = imageWidth / ratio

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: imageHeight + 50,
  },
  poster: {
    width: imageWidth,
    height: imageHeight,
  },
})

export default styles

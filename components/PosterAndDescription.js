import React from 'react'
import T from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'

import Poster from './Poster'

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  text: {
    flex: 1,
    paddingLeft: 10,
    flexWrap: 'wrap',
  },
})

const PosterAndDescription = ({ poster, description }) => (
  <View style={styles.container}>
    <Poster path={poster} />
    <Text style={styles.text}>{description}</Text>
  </View>
)

PosterAndDescription.propTypes = {
  poster: T.string.isRequired,
  description: T.string.isRequired,
}

export default PosterAndDescription

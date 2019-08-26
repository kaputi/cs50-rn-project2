import React from 'react'
import T from 'prop-types'
import { View, Text } from 'react-native'

const Ratings = ({ ratings }) => {
  if (!ratings) return null

  const nodes = ratings.map((rate) => (
    <Text key={rate.Source}>
      {rate.Source} : {rate.Value}
    </Text>
  ))

  return <View style={{ marginBottom: 5 }}>{nodes}</View>
}

Ratings.propTypes = {
  ratings: T.array,
}

Ratings.defaultProps = {
  ratings: null,
}

export default Ratings

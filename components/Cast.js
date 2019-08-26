import React from 'react'
import T from 'prop-types'
import { View, Text } from 'react-native'

const Cast = ({ cast }) => {
  if (!cast) return null

  const components = cast.map((actor) => (
    <Text key={actor.id}>
      {actor.name} - {actor.character}
    </Text>
  ))

  return <View>{components}</View>
}

Cast.propTypes = {
  cast: T.array,
}

Cast.defaultProps = {
  cast: null,
}

export default Cast

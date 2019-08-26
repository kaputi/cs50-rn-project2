import React from 'react'
import T from 'prop-types'
import { Text } from 'react-native'

const Info = ({ genres, runtime, rated }) => {
  let string = ''

  if (rated) string += rated

  if (runtime) {
    if (string) string += ' | '
    string += `${runtime} (min)`
  }

  if (genres) {
    if (string) string += ' | '
    for (let i = 0; i < genres.length; i++) {
      string += genres[i].name
      if (i !== genres.length - 1) string += ', '
    }
  }

  return <Text>{string}</Text>
}

Info.propTypes = {
  genres: T.array,
  runtime: T.number,
  rated: T.string,
}

Info.defaultProps = {
  genres: null,
  runtime: null,
  rated: '',
}

export default Info

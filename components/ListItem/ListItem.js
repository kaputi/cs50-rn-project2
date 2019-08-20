import React, { PureComponent } from 'react'
import { TouchableOpacity, Image, Text } from 'react-native'
import { withNavigation } from 'react-navigation'
import T from 'prop-types'

import styles from './ListItem.styles'

class ListItem extends PureComponent {
  static propTypes = {
    poster: T.string.isRequired,
    title: T.string.isRequired,
    id: T.number.isRequired,
  }

  goToMovie = () => {
    const { id, navigation } = this.props

    navigation.navigate('details', { id })
  }

  render() {
    const { poster, title } = this.props
    return (
      <TouchableOpacity
        onPress={() => this.goToMovie()}
        style={styles.container}
      >
        <Image source={{ uri: poster }} style={styles.poster} />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    )
  }
}

export default withNavigation(ListItem)

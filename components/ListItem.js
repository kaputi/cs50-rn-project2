import React, { PureComponent } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'
import T from 'prop-types'

import Poster from './Poster'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    marginHorizontal: 15,
    fontWeight: 'bold',
  },
})

class ListItem extends PureComponent {
  static propTypes = {
    poster: T.string,
    title: T.string.isRequired,
    id: T.number.isRequired,
  }

  static defaultProps = {
    poster: null,
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
        <Poster path={poster} list />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    )
  }
}

export default withNavigation(ListItem)

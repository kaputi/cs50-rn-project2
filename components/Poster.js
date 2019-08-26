import React, { Component } from 'react'
import T from 'prop-types'
import { Image, Dimensions } from 'react-native'

export default class Poster extends Component {
  static propTypes = {
    path: T.string,
    list: T.bool,
  }

  static defaultProps = {
    path: null,
    list: false,
  }

  constructor(props) {
    super(props)

    this.state = {
      height: 0,
      width: 0,
    }
  }

  componentWillMount = () => {
    const { path, list } = this.props

    if (path) {
      const uri = `http://image.tmdb.org/t/p/w185${path}`
      let size = 2.5

      if (list) size = 2

      const posterWidth = Dimensions.get('window').width / size - 10

      Image.getSize(uri, (width, height) => {
        const ratio = width / height
        const posterheight = posterWidth / ratio

        this.setState({ width: posterWidth, height: posterheight })
      })
    }
  }

  render() {
    const { path } = this.props

    const { width, height } = this.state
    const uri = `http://image.tmdb.org/t/p/w185${path}`

    return <Image source={{ uri }} style={{ width, height }} />
  }
}

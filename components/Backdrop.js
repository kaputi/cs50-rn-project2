import React, { Component } from 'react'
import T from 'prop-types'
import { Image, Dimensions } from 'react-native'

export default class Backdrop extends Component {
  static propTypes = {
    image: T.string,
  }

  static defaultProps = {
    image: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      width: Dimensions.get('window').width,
      height: 0,
    }
  }

  componentWillMount() {
    const { image } = this.props

    if (image) {
      const { width } = this.state
      const uri = `http://image.tmdb.org/t/p/w300${image}`
      Image.getSize(uri, (originalWidth, originalHeight) => {
        const aspectRatio = originalWidth / originalHeight
        this.setState({ height: width / aspectRatio })
      })
    }
  }

  render() {
    const { image } = this.props

    const { width, height } = this.state

    const uri = `http://image.tmdb.org/t/p/w300${image}`

    return <Image source={{ uri }} style={{ width, height }} />
  }
}

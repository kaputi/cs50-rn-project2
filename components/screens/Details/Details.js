/* eslint-disable camelcase */
import React, { Component } from 'react'
import { ScrollView, View, Text, Image, Dimensions } from 'react-native'

import { getDetails } from '../../../utils/tmdb'

import styles from './Details.styles'

const WIDTH = Dimensions.get('window').width

class Details extends Component {
  constructor() {
    super()
    this.state = {
      details: {},
      backdropHeight: 0,
    }
  }

  componentWillMount() {
    this.getDetails()
    const { navigation } = this.props

    navigation.addListener('willFocus', () => this.getDetails())
  }

  getDetails = async () => {
    const { navigation } = this.props
    const movieId = navigation.getParam('id', 'NO-ID')
    const details = await getDetails(movieId)

    this.setState({ details })
  }

  render() {
    const { details, backdropHeight } = this.state
    const {
      backdrop_path,
      budget,
      credits,
      genres,
      // imdb_id,
      overview,
      poster_path,
      release_date,
      revenue,
      runtime,
      title,
    } = details

    let actorsNode = null

    if (credits) {
      const { cast } = credits
      actorsNode = cast.map((member) => (
        <Text key={member.id}>
          {member.name} - {member.character}
        </Text>
      ))
    }

    const year = release_date ? release_date.substr(0, 4) : ''

    let genreString = ''
    if (genres) {
      for (let i = 0; i < genres.length; i++) {
        genreString += genres[i].name
        if (i !== genres.length - 1) genreString += ', '
      }
    }

    const backdropPath = `http://image.tmdb.org/t/p/w300${backdrop_path}`
    const posterUrl = `http://image.tmdb.org/t/p/w185/${poster_path}`

    // get aspect ratios
    if (backdrop_path) {
      Image.getSize(backdropPath, (width, height) => {
        const aspectRatio = width / height
        this.setState({ backdropHeight: WIDTH / aspectRatio })
      })
    }
    return (
      <ScrollView>
        <Image
          source={{ uri: backdropPath }}
          style={{ width: WIDTH, height: backdropHeight }}
        />
        <View style={styles.container}>
          <Text style={styles.title}>
            {title}({year})
          </Text>
          <Text>
            GET THE PG-bla | {runtime} min | {genreString}
          </Text>
          <View style={styles.posterAndDescription}>
            <Image source={{ uri: posterUrl }} style={styles.poster} />
            <Text style={styles.description}>{overview}</Text>
          </View>
          <Text>imdb | metascore | rottentomatoes</Text>
          <Text>
            budget: {budget}$ | revenue: {revenue}$
          </Text>
          <Text style={styles.title}>Cast</Text>
          {actorsNode}
        </View>
      </ScrollView>
    )
  }
}

export default Details

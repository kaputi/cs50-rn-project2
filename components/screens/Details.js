/* eslint-disable camelcase */
import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { getDetails } from '../../utils/tmdb'

// import styles from './Details.styles'
import Backdrop from '../Backdrop'
import Cast from '../Cast'
import Info from '../Info'
import Ratings from '../Ratings'
import PosterAndDescription from '../PosterAndDescription'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  title: {
    marginVertical: 5,
    fontWeight: 'bold',
    fontSize: 18,
  },
})

class Details extends Component {
  constructor() {
    super()
    this.state = {
      details: null,
    }
  }

  componentWillMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const { navigation } = this.props
    const movieId = navigation.getParam('id', 'NO-ID')
    const details = await getDetails(movieId)

    this.setState({ details })
  }

  render() {
    const { details } = this.state

    if (!details) return null

    const {
      backdrop_path,
      // budget,
      credits,
      genres,
      overview,
      poster_path,
      rated,
      ratings,
      release_date,
      // revenue,
      runtime,
      title,
    } = details

    const { cast } = credits

    const year = release_date ? release_date.substr(0, 4) : '' // removes day and month

    return (
      <ScrollView>
        <Backdrop image={backdrop_path} />
        <View style={styles.container}>
          <Text style={styles.title}>
            {title}({year})
          </Text>
          <Info runtime={runtime} rated={rated} genres={genres} />
          <PosterAndDescription poster={poster_path} description={overview} />
          <Ratings ratings={ratings} />
          <Text style={styles.title}>Cast</Text>
          <Cast cast={cast} />
        </View>
      </ScrollView>
    )
  }
}

export default Details

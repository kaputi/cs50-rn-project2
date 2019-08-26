/* eslint-disable camelcase */
import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native'

import ListItem from '../ListItem'

import { searchMovies } from '../../utils/tmdb'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    flex: 1,
    paddingLeft: 10,
    marginRight: 10,
  },
  searchButton: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 20,
  },
})

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      inputText: '',
      movies: [],
      page: 1,
    }
  }

  getMovies = async () => {
    const { searchText, movies, page } = this.state
    const response = await searchMovies(searchText, page)
    const newMovies =
      page !== 1 ? [...movies, ...response.results] : response.results
    this.setState({ movies: newMovies })
  }

  searchMovies = () => {
    const { inputText } = this.state
    this.setState({ searchText: inputText, movies: [], page: 1 }, () =>
      this.getMovies()
    )
  }

  loadMoreMovies = () => {
    const { page } = this.state

    this.setState({ page: page + 1 }, () => this.getMovies())
  }

  keyExtractor = (item) => item.id

  listRenderItem = ({ item }) => {
    const { poster_path, original_title, id } = item

    return (
      <ListItem key={id} poster={poster_path} title={original_title} id={id} />
    )
  }

  render() {
    const { inputText, movies } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ inputText: text })}
            value={inputText}
          />

          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => this.searchMovies()}
          >
            <Text>Search</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={movies}
          renderItem={this.listRenderItem}
          numColumns={2}
          onEndReached={this.loadMoreMovies}
          keyExtractor={this.keyExtractor}
        />
      </View>
    )
  }
}

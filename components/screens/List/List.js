import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'

import ListItem from '../../ListItem'

import { searchMovies } from '../../../utils/tmdb'

import styles from './List.styles'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      inputText: 'avengers',
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
    this.setState({ searchText: inputText }, () => this.getMovies())
  }

  loadMoreMovies = () => {
    const { page } = this.state

    this.setState({ page: page + 1 }, () => this.getMovies())
  }

  keyExtractor = (item) => item.id

  listRenderItem = ({ item }) => {
    const { poster_path, original_title, id } = item

    const posterBaseUrl = 'http://image.tmdb.org/t/p/w185/' // w185 = width 185 TODO: add this to the util file

    return (
      <ListItem
        key={id}
        poster={`${posterBaseUrl}${poster_path}`}
        title={original_title}
        id={id}
      />
    )
  }

  render() {
    const { inputText, movies } = this.state

    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.setState({ inputText: text })}
          value={inputText}
        />
        <TouchableOpacity onPress={() => this.searchMovies()}>
          <Text>Search</Text>
        </TouchableOpacity>

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

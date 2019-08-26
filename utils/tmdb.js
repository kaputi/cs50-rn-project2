import { getMissingInfo } from './moviesAPI'

const key = '6374c3f94dec7aa26ae4c1b3ee43d4d7'
const baseUrl = 'https://api.themoviedb.org/3'

// search movie
// `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`

// for details
// `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`

// types can be movie, series, etc
export const searchMovies = async (query, page, type = 'movie') => {
  const url = `${baseUrl}/search/${type}?api_key=${key}&query=${query}&page=${page}`
  const data = await fetch(url)
  const json = await data.json()
  return json
}

export const getDetails = async (id, type = 'movie') => {
  const url = `${baseUrl}/${type}/${id}?api_key=${key}&append_to_response=credits`
  const data = await fetch(url)
  const json = await data.json()

  const missingInfo = await getMissingInfo(json.imdb_id)

  return { ...json, ...missingInfo }
}

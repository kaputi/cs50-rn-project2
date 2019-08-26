const key = 'b348669a'

export const getMovie = async (id) => {
  const url = `http://www.omdbapi.com/?apikey=${key}&i=${id}`
  const data = await fetch(url)
  const json = await data.json()

  return json
}

export const getMissingInfo = async (id) => {
  const { Rated, Ratings } = await getMovie(id)
  return { rated: Rated, ratings: Ratings } // remove caps
}

export const searchMovies = async (query, page = 1) => {
  const queryString = query.replace(/\s+/g, '+')

  const baseUrl = `http://www.omdbapi.com/?apikey=${key}&s=${queryString}&page=${page}`

  const data = await fetch(baseUrl)
  const json = await data.json()

  return json
}

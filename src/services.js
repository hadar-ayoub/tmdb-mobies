import _ from 'lodash'
import { searchWebService } from './apis'

const FIRST_PAGE = 1

export function getMovies (keyword) {
  return searchWebService(keyword, FIRST_PAGE)
    .then(response => {
      let movies = [], body
      if (_.has(response, 'results')) {
        body = response
        movies = body.results
      } else if (_.has(response, '_bodyText')) {
        body = JSON.parse(response._bodyText)
        movies = body.results
      }
      if (!_.has(movies, 'length')) movies = []
      let totalPages = body.total_pages
      console.log({ movies, totalPages })
      return { movies, totalPages }
    })
    .catch(() => [])
}

export function getMoreMovies (keyword, page) {
  return searchWebService(keyword, page)
    .then(response => {
      let movies = []
      let totalPages, page, body
      if (_.has(response, 'results')) {
        body = response
        movies = body.results
      } else if (_.has(response, '_bodyText')) {
        body = JSON.parse(response._bodyText)
        movies = body.results
      }
      page = body.page
      totalPages = body.total_pages
      if (!_.has(movies, 'length')) movies = []
      console.log({ movies, totalPages, page })
      return { movies, totalPages, page }
    })
    .catch(() => [])
}

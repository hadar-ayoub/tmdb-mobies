import React, { createContext } from 'react'
import { getMovies, getMoreMovies } from './services'

const AppContext = createContext({
  keyword: '',
  movies: [],
  totalPages: 1,
  page: 1,
  initKeyword: () => {},
  updateKeyword: () => {},
  initMovies: () => {},
  addMovies: () => {}
})

export class AppProvider extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      keyword: '',
      movies: [],
      totalPages: 0,
      page: 1
    }
    this.updateKeyword = this.updateKeyword.bind(this)
    this.initKeyword = this.initKeyword.bind(this)
    this.getMoreMovies = this.getMoreMovies.bind(this)
    this.initMovies = this.initMovies.bind(this)
  }

  updateKeyword (keyword) {
    this.setState({ keyword })
    if (keyword !== '') {
      getMovies(keyword).then(({ movies, totalPages }) => {
        this.setState({ movies, totalPages })
      })
    }else {
      this.setState({movies: []})
    }
  }

  initKeyword (keyword) {
    this.setState({ keyword })
  }

  getMoreMovies () {
    let page = this.state.page + 1
    let keyword = this.state.keyword
    getMoreMovies(keyword, page).then(({ movies, totalPages, page }) => {
      this.setState({
        movies: [...this.state.movies, movies],
        totalPages,
        page
      })
    })
    this.setState({ movies: [...this.state.movies, movies] })
  }

  initMovies (keyword) {
    getMovies(keyword).then(({ movies, totalPages }) => {
      this.setState({ movies, totalPages })
    })
  }

  render () {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          initKeyword: this.initKeyword,
          updateKeyword: this.updateKeyword,
          initMovies: this.initMovies,
          addMovies: this.addMovies
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export const AppConsumer = AppContext.Consumer

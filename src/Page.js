import React from 'react'
import PopularMap from './components/PopularMap'
import LatestMap from './components/LatestMap'
import TopRatedMap from './components/TopRatedMap'
import UpComingMap from './components/UpComingMap'
import NowPlayingMap from './components/NowPlayingMap'
import TVOnAirMap from './components/TVOnAirMap'

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      popular: [],
      topRated: [],
      upcoming: [],
      nowPlaying: [],
      airingToday: [],
      tvOnAir: [],
      selectValue: ''
    }
  }

  loadMedia(mediaType) {
    if (mediaType === 'tv') {
      fetch(
        'https://api.themoviedb.org/3/tv/popular?api_key=4d6322cf6a2b7554c7e6ffbaec593010&language=en-US&page=1'
      )
        .then(res => {
          return res.json()
        })
        .then(res => {
          this.setState({
            popular: res.results
          })
          console.log(res.results)
        })
      fetch(
        ' https://api.themoviedb.org/3/tv/top_rated?api_key=4d6322cf6a2b7554c7e6ffbaec593010&language=en-US&page=1'
      )
        .then(res => {
          return res.json()
        })
        .then(top => {
          this.setState({
            topRated: top.results
          })
          console.log(top.results)
        })
      fetch(
        ' https://api.themoviedb.org/3/tv/on_the_air?api_key=4d6322cf6a2b7554c7e6ffbaec593010&language=en-US&page=1'
      )
        .then(res => {
          return res.json()
        })
        .then(air => {
          this.setState({
            tvOnAir: air.results
          })
          console.log(air.results)
        })

      //end of tv
    } else {
      // fetch
      fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=4d6322cf6a2b7554c7e6ffbaec593010&language=en-US&page=1'
      )
        .then(res => {
          return res.json()
        })
        .then(res => {
          this.setState({
            popular: res.results
          })
          console.log(res.results)
        })
      fetch(
        ' https://api.themoviedb.org/3/movie/top_rated?api_key=4d6322cf6a2b7554c7e6ffbaec593010&language=en-US&page=1'
      )
        .then(res => {
          return res.json()
        })
        .then(top => {
          this.setState({
            topRated: top.results
          })
          console.log(top.results)
        })
      fetch(
        'https://api.themoviedb.org/3/movie/upcoming?api_key=4d6322cf6a2b7554c7e6ffbaec593010&language=en-US&page=1'
      )
        .then(res => {
          return res.json()
        })
        .then(upcoming => {
          this.setState({
            upcoming: upcoming.results
          })
          console.log(upcoming.results)
        })
      fetch(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=4d6322cf6a2b7554c7e6ffbaec593010&language=en-US&page=1'
      )
        .then(res => {
          return res.json()
        })
        .then(playing => {
          this.setState({
            nowPlaying: playing.results
          })
          console.log(playing.results)
        })
      //end of movies
    }
  }

  handleChange(e) {
    this.loadMedia(e.target.value)
    this.setState({
      selectValue: e.target.value
    })

    // load movies or tv
    // set movies or tv
  }

  componentWillMount() {
    this.setState({ selectValue: 'movie' })
    this.loadMedia()
  }

  render() {
    const { popular, topRated, upcoming, nowPlaying, tvOnAir } = this.state
    console.log('hello from render')
    if (this.state.selectValue === 'movie')
      return (
        <div>
          <select value={this.state.selectValue} onChange={this.handleChange}>
            <option value="movie">movie </option>
            <option value="tv"> tv </option>
          </select>
          <NowPlayingMap nowPlaying={nowPlaying} />
          <PopularMap popular={popular} />
          <TopRatedMap topRated={topRated} />
          <UpComingMap upcoming={upcoming} />
        </div>
      )
    if (this.state.selectValue === 'tv')
      return (
        <div>
          <select value={this.state.selectValue} onChange={this.handleChange}>
            <option value="movie">movie </option>
            <option value="tv"> tv </option>
          </select>
          <PopularMap popular={popular} />
          <TopRatedMap topRated={topRated} />
          <TVOnAirMap tvOnAir={tvOnAir} />
        </div>
      )
  }
}

export default Page

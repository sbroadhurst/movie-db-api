import React from 'react'
import PopularMap from './components/PopularMap'
//import LatestMap from './components/LatestMap'
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
    const style = {
      border: '1px solid black'
    }
    const text = {
      border: '1px solid black',
      width: '100px',
      padding: '10px',
      fontWeight: 'bold'
    }
    if (this.state.selectValue === 'movie')
      return (
        <div>
          <select value={this.state.selectValue} onChange={this.handleChange}>
            <option value="movie">movie </option>
            <option value="tv"> tv </option>
          </select>
          <p style={text}>Now Playing</p>
          <div style={style}>
            <NowPlayingMap nowPlaying={nowPlaying} />
          </div>
          <p style={text}>Popular</p>
          <div style={style}>
            <PopularMap popular={popular} />{' '}
          </div>
          <p style={text}>Top Rated</p>
          <div style={style}>
            <TopRatedMap topRated={topRated} />{' '}
          </div>
          <p style={text}>Upcoming </p>
          <div style={style}>
            <UpComingMap upcoming={upcoming} />
          </div>
        </div>
      )
    if (this.state.selectValue === 'tv')
      return (
        <div>
          <select value={this.state.selectValue} onChange={this.handleChange}>
            <option value="movie">movie </option>
            <option value="tv"> tv </option>
          </select>
          <p style={text}>Popular</p>
          <div style={style}>
            <PopularMap popular={popular} />{' '}
          </div>
          <p style={text}>Top Rated</p>
          <div style={style}>
            <TopRatedMap topRated={topRated} />{' '}
          </div>
          <p style={text}>TV On Air</p>
          <div style={style}>
            <TVOnAirMap tvOnAir={tvOnAir} />
          </div>
        </div>
      )
  }
}

export default Page

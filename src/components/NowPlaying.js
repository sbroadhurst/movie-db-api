import React from 'react'

class PopMovie extends React.Component {
  constructor(props) {
    super(props)
    //    // this.clicked = this.clicked.bind(this)
    //   }

    //   clicked() {
    //     this.props.select(this.props.guid)
  }

  render() {
    let nowplaying = this.props.info
    // let title = nowplaying.title
    // let poster = nowplaying.poster_path

    // let url = 'https://www.fanmovieshow.com/movies/' + title + poster
    return (
      <div className="nowplaying-list" style={{ display: 'inline' }}>
        <img
          style={{ width: '30%', height: '50%', margin: '1px' }}
          className="nowplaying"
          alt={nowplaying.title}
          title={nowplaying.title}
          src="https://cdn.pixabay.com/photo/2016/09/08/11/05/the-pink-panther-1653913_1280.jpg"
          // onClick={this.clicked}
        />
      </div>
    )
  }
}

export default PopMovie

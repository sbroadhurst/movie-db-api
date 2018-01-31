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
    let popmovie = this.props.info

    let poster = popmovie.poster_path

    let url = ' http://image.tmdb.org/t/p/w185/' + poster
    return (
      <div className="popmovie-list" style={{ display: 'inline' }}>
        <img
          style={{ width: '4.5%', margin: '1px' }}
          className="popmovie"
          alt={popmovie.title}
          title={popmovie.title}
          src={url}
          // onClick={this.clicked}
        />
      </div>
    )
  }
}

export default PopMovie

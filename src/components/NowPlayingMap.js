import React from 'react'
import PopMovie from './PopMovie'

class NowPlayingMap extends React.Component {
  renderPlaying() {
    return (
      <div
        style={{
          width: '80%',
          height: '20vw',
          overflow: 'auto',
          display: 'inline',
          margin: '2%'
        }}
      >
        {this.props.nowPlaying.map((info, index) => {
          return (
            <PopMovie
              key={index}
              info={info}
              id={info.id}

              // select={this.props.select}
            />
          )
        })}
      </div>
    )
  }

  render() {
    let playing = this.state
    return <div>{this.renderPlaying(playing)}</div>
  }
}
export default NowPlayingMap

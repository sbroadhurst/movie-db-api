import React from 'react'
import PopMovie from './PopMovie'

class TVOnAirMap extends React.Component {
  renderOnAir() {
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
        {this.props.tvOnAir.map((info, index) => {
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
    return <div>{this.renderOnAir(playing)}</div>
  }
}
export default TVOnAirMap

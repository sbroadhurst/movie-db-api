import React from 'react'
import PopMovie from './PopMovie'

class TopRatedMap extends React.Component {
  renderPopular() {
    return (
      <div
        style={{
          width: '80%',

          overflow: 'auto',
          display: 'inline'
        }}
      >
        {this.props.topRated.map((info, index) => {
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
    let rated = this.state
    return <div>{this.renderPopular(rated)}</div>
  }
}
export default TopRatedMap

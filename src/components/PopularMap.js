import React from 'react'
import PopMovie from './PopMovie'

class PopularMap extends React.Component {
  renderPopular() {
    return (
      <div
        style={{
          width: '100%',
          height: '10vw',
          overflow: 'auto'
        }}
      >
        {this.props.popular.map((info, index) => {
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
    let popular = this.state
    return <div>{this.renderPopular(popular)}</div>
  }
}
export default PopularMap

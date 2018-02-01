import React from 'react'
import PopMovie from './PopMovie'

class PopularMap extends React.Component {
  renderPopular() {
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

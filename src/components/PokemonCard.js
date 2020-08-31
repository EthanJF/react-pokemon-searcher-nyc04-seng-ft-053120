import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    displayFront: true
  }

  changeDisplayPicture = () => {
    this.setState({
      displayFront: !this.state.displayFront
    })
  }
  render() {
    const { name, hp, sprites } = this.props.thisPokemon
    const displayFront = this.state.displayFront
    return (
      <Card>
        <div>
          <div className="image" onClick={this.changeDisplayPicture}>
            <img alt={name}  src={displayFront ? sprites.front : sprites.back}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

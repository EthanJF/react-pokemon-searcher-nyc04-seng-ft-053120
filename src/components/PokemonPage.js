import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  
  state = {
    allPokemon: [],
    searchParams: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(response => response.json())
    .then(responseObj => {
      this.setState({
        allPokemon: responseObj
      })
    })
  }

  handleSearch = event => {
    this.setState({
      searchParams: event.target.value
    })
  }

  addNewPokemon = pokemon => {
    this.setState({
      allPokemon: [...this.state.allPokemon, pokemon]
    })
  }


  render() {
    const desiredPokemon = this.state.allPokemon.filter(eachPokemon => {
      return eachPokemon.name.includes(this.state.searchParams)
    })
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addNewPokemon={this.addNewPokemon}/>
        <br />
        <Search handleSearch={this.handleSearch}/>
        <br />
        <PokemonCollection pokemon={desiredPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage

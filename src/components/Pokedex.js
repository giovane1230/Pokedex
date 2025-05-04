import React from 'react';
import Pokemon from './Pokemon';
import pokemonList from '../data';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      filteredType: 'All',
    };
  }

  incrementar = () => {
    const filteredList = this.getFilteredList();
    this.setState((prevState) => ({
      contador: (prevState.contador + 1) % filteredList.length,
    }));
  };

  setFilteredType = (type) => {
    this.setState({ filteredType: type, contador: 0 });
  };

  getFilteredList = () => {
    const { filteredType } = this.state;
    return filteredType === 'All'
      ? pokemonList
      : pokemonList.filter((poke) => poke.type === filteredType);
  };

  render() {
    const { contador } = this.state;
    const filteredList = this.getFilteredList();

    return (
      <>
        <h1>Pokédex</h1>
        <div className="pokedex">
          {filteredList[contador] && (
            <Pokemon
              key={ filteredList[contador].id }
              pokemon={ filteredList[contador] }
            />
          )}
          <button onClick={ this.incrementar }>Próximo pokémon</button>
          <button onClick={ () => this.setFilteredType('Fire') }>Fire</button>
          <button onClick={ () => this.setFilteredType('Psychic') }>Psychic</button>
          <button onClick={ () => this.setFilteredType('All') }>All</button>
        </div>
      </>
    );
  }
}

export default Pokedex;

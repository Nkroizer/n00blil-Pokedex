import React from 'react';
import '../css/pokemon.css';
import { getPokeId, capitalizeFirstLetter, getTypeBakgroundColor } from '../Helper/common';

const Pokemon = (props) => {
  return (
    <>
      <div className="pokemonCube">
        <div className="pokemonImageWrapper">
          <img className="pokemonImage" src={props.pokeData.item.sprites.other['official-artwork'].front_default} alt="Logo" />
        </div>

        <div className="pokemonId">
          {getPokeId(props.pokeData.item.id)}
        </div>

        <div className="pokemonText">
          <b>
            {capitalizeFirstLetter(props.pokeData.item.name)}
          </b>
        </div>

        <div>
          <div className="pokemonAbility" style={getTypeBakgroundColor(props.pokeData.item.types[0].type.name)}>
            {props.pokeData.item.types[0].type.name}
          </div>

          {props.pokeData.item.types[1] ?
            <div className="pokemonAbility" style={getTypeBakgroundColor(props.pokeData.item.types[1].type.name)}>
              {props.pokeData.item.types[1].type.name}
            </div> : null
          }
        </div>

      </div>
    </>
  );
};

export default Pokemon;
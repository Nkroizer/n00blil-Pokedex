import React from 'react';
import { getPokeId, capitalizeFirstLetter, getTypeBakgroundColor } from '../Helper/common';

const Pokemon = (props) => {
  return (
    <>
      <div style={pokemonCube}>
        <div style={pokemonImageWrapper}>
          <img style={pokemonImage} src={props.pokeData.item.sprites.other['official-artwork'].front_default} alt="Logo" />
        </div>

        <div style={pokemonId}>
          {getPokeId(props.pokeData.item.id)}
        </div>

        <div style={pokemonText}>
          <b>
            {capitalizeFirstLetter(props.pokeData.item.name)}
          </b>
        </div>

        <div>
          <div style={{...pokemonAbility, ...getTypeBakgroundColor(props.pokeData.item.types[0].type.name)}}>
            {props.pokeData.item.types[0].type.name}
          </div>

          {props.pokeData.item.types[1] ?
            <div style={{...pokemonAbility, ...getTypeBakgroundColor(props.pokeData.item.types[1].type.name)}}>
              {props.pokeData.item.types[1].type.name}
            </div> : null
          }
        </div>

      </div>
    </>
  );
};

const pokemonCube = {
  borderRadius: '5px',
  border: '1px solid blue',
  boxShadow: '2px 2px 7px 0px',
  margin: '5px',
  padding: '5px',
}

const pokemonImageWrapper = {
  background: '#f2f2f2',
  borderRadius: '5px',
  display: 'block',
  float: 'left',
  paddingTop: '100%',
  position: 'relative',
  width: '100%',
}

const pokemonImage = {
  float: 'left',
  position: 'absolute',
  top: '0',
  width: '100%',
}

const pokemonText = {
  color: '#313131',
  fontFamily: '"Flexo-Demi", arial, sans-serif',
  fontSize: '145%',
  marginBottom: '5px',
  textTransform: 'none',
}

const pokemonId = {
  color: '#919191',
  fontFamily: '"Flexo-Bold", arial, sans-serif',
  fontSize: '80%',
  paddingTop: '2px',
}

const pokemonAbility = {
  borderRadius: '3px',
  float: 'left',
  fontFamily: '"Flexo-Medium", arial, sans-serif',
  fontSize: '11px',
  lineHeight: '18px',
  margin: '0 1.5625% 0 0',
  maxWidth: '110px',
  textAlign: 'center',
  textTransform: 'none',
  width: '38.4375%',
}

export default Pokemon;
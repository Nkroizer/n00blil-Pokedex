import React from 'react';
import { getPokemonHeight, capitalizeFirstLetter, getPokemonWeight } from '../Helper/common';

const PokemonDetails = ({ route, navigation }) => {
    const { pokemonData } = route.params;

    return (
        <div>
            <div style={kantoPokedexBody}>
                <div style={pokemonImageWrpper}>
                    <div style={pokemonImageRedDotWrapper}>
                        <div style={pokemonImageRedDot}></div>
                        <div style={pokemonImageRedDot}></div>
                    </div>

                    <div style={pokemonPokedexImageWrapper}>
                        <div style={pokemonPokedexImageborder}>
                            <img style={pokemonPokedexImage} src={pokemonData.sprites.other['official-artwork'].front_default} alt="Logo" />
                        </div>
                    </div>

                    <div style={pokedexCircleRed}></div>
                </div>

                <div style={pokedexInformationBoxWrapper}>
                    Name: {capitalizeFirstLetter(pokemonData.species.name)}
                    <br />
                    Height: {getPokemonHeight(pokemonData.height)}
                    <br />
                    Weight: {getPokemonWeight(pokemonData.weight)}
                    <br />
                </div>
            </div>
        </div>
    )
};

const pokedexCircleRed = {
    backgroundColor: 'rgb(253, 0, 0)',
    borderRadius: '50%',
    border: '2px solid black',
    height: '20px',
    margin: '6px',
    width: '20px',
}

const kantoPokedexBody = {
    backgroundColor: '#fe0066',
    border: '2px solid black',
    paddingBottom: '40px',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '40px',
}

const pokemonImageWrpper = {
    backgroundColor: 'white',
    borderRadius: '0 0 0 10px',
    border: '2px solid black',
    padding: '10px',
}

const pokemonImageRedDotWrapper = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
}

const pokemonImageRedDot = {
    backgroundColor: 'rgb(253, 0, 0)',
    borderRadius: '50%',
    border: '1px solid black',
    height: '6px',
    margin: '6px',
    width: '6px',
}

const pokemonPokedexImageWrapper = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
}

const pokemonPokedexImageborder = {
    background: 'rgb(153, 203, 152)',
    borderRadius: '5px',
    border: '2px solid black',
}

const pokemonPokedexImage = {
    borderRadius: '5px',
    height: '90px',
    padding: '20px',
    width: '90px',
}

const pokedexInformationBoxWrapper = {
    background: 'rgb(157, 157, 157)',
    borderRadius: '5px',
    border: '2px solid black',
    fontFamily: 'cursive',
    fontWeight: '800',
    marginTop: '10px',
    padding: '20px',
}


export default PokemonDetails;
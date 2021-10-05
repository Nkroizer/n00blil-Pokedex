import React from 'react';
import '../css/PokemonDetails.css';
import { getPokemonHeight, capitalizeFirstLetter, getPokemonWeight } from '../Helper/common';

const PokemonDetails = ({ route, navigation }) => {
    const { pokemonData } = route.params;

    console.log(pokemonData);
    return (
        <div>
            <div className="kantoPokedexBody">
                <div className="pokemonImageWrpper">
                    <div className="pokemonImageRedDotWrapper">
                        <div className="pokemonImageRedDot"></div>
                        <div className="pokemonImageRedDot"></div>
                    </div>

                    <div className="pokemonPokedexImageWrapper">
                        <div className="pokemonPokedexImageborder">
                            <img className="pokemonPokedexImage" src={pokemonData.sprites.other['official-artwork'].front_default} alt="Logo" />
                        </div>
                    </div>

                    <div className="pokedexCircleRed"></div>
                </div>

                <div className="pokedexInformationBoxWrapper">
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

export default PokemonDetails;
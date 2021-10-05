import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import Pokemon from './Pokemon';
import '../css/pokedexMain.css';
import KantoImage from "../assets/img/pokemon/bulbasaur.png";
import JhotoImage from "../assets/img/pokemon/chikorita.png";
import HoennImage from "../assets/img/pokemon/treecko.png";
import SinnohImage from "../assets/img/pokemon/turtwig.png";
import UnovaImage from "../assets/img/pokemon/snivy.png";
import KalosImage from "../assets/img/pokemon/chespin.png";
import AlolaImage from "../assets/img/pokemon/rowlet.png";
import GalarImage from "../assets/img/pokemon/grookey.png";
import OtherImage from "../assets/img/pokemon/meltan.png";

function renderItem(data, navigation) {
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('PokemonDetails', {
                pokemonData: data.item,
            });
        }}>
            <Pokemon pokeData={data} ></Pokemon>
        </TouchableOpacity>
    )
};

function FlatListSeparator() {
    return (
        <View style={{
            height: .5,
            width: "100%",
        }}
        />
    );
};

const kantoPokemonList = require('../savedData/kantoPokemon.json');
const jhotoPokemonList = require('../savedData/jhotoPokemon.json');
const hoennPokemonList = require('../savedData/hoennPokemon.json');
const sinnohPokemonList = require('../savedData/sinnohPokemon.json');
const unovaPokemonList = require('../savedData/unovaPokemon.json');
const kalosPokemonList = require('../savedData/kalosPokemon.json');
const alolaPokemonList = require('../savedData/alolaPokemon.json');
const galarPokemonList = require('../savedData/galarPokemon.json');
const otherPokemonList = require('../savedData/otherPokemon.json');

function PokedexScreen({ navigation }) {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <div className="pokedexKantoButton">
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Kanto', {
                            pokemonData: kantoPokemonList,
                            renderItem: renderItem,
                            FlatListItemSeparator: FlatListSeparator,
                        });
                    }}>

                    <Image source={KantoImage}
                        style={{
                            resizeMode: "contain",
                            height: 100,
                        }} />

                    Kanto
                </TouchableOpacity>
            </div>

            <div className="pokedexKantoButton">
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Jhoto', {
                            pokemonData: jhotoPokemonList,
                            renderItem: renderItem,
                            FlatListItemSeparator: FlatListSeparator,
                        });
                    }}>

                    <Image source={JhotoImage}
                        style={{
                            resizeMode: "contain",
                            height: 100,
                        }} />

                    Jhoto
                </TouchableOpacity>
            </div>

            <div className="pokedexKantoButton">
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Hoenn', {
                            pokemonData: hoennPokemonList,
                            renderItem: renderItem,
                            FlatListItemSeparator: FlatListSeparator,
                        });
                    }}>

                    <Image source={HoennImage}
                        style={{
                            resizeMode: "contain",
                            height: 100,
                        }} />

                    Hoenn
                </TouchableOpacity>
            </div>

            <div className="pokedexKantoButton">
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Sinnoh', {
                            pokemonData: sinnohPokemonList,
                            renderItem: renderItem,
                            FlatListItemSeparator: FlatListSeparator,
                        });
                    }}>

                    <Image source={SinnohImage}
                        style={{
                            resizeMode: "contain",
                            height: 100,
                        }} />

                    Sinnoh
                </TouchableOpacity>
            </div>

            <div className="pokedexKantoButton">
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Unova', {
                            pokemonData: unovaPokemonList,
                            renderItem: renderItem,
                            FlatListItemSeparator: FlatListSeparator,
                        });
                    }}>

                    <Image source={UnovaImage}
                        style={{
                            resizeMode: "contain",
                            height: 100,
                        }} />

                    Unova
                </TouchableOpacity>
            </div>

            <div className="pokedexKantoButton">
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Kalos', {
                            pokemonData: kalosPokemonList,
                            renderItem: renderItem,
                            FlatListItemSeparator: FlatListSeparator,
                        });
                    }}>

                    <Image source={KalosImage}
                        style={{
                            resizeMode: "contain",
                            height: 100,
                        }} />

                    Kalos
                </TouchableOpacity>
            </div>

            <div className="pokedexKantoButton">
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Alola', {
                            pokemonData: alolaPokemonList,
                            renderItem: renderItem,
                            FlatListItemSeparator: FlatListSeparator,
                        });
                    }}>

                    <Image source={AlolaImage}
                        style={{
                            resizeMode: "contain",
                            height: 100,
                        }} />

                    Alola
                </TouchableOpacity>
            </div>

            <div className="pokedexKantoButton">
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Galar', {
                            pokemonData: galarPokemonList,
                            renderItem: renderItem,
                            FlatListItemSeparator: FlatListSeparator,
                        });
                    }}>

                    <Image source={GalarImage}
                        style={{
                            resizeMode: "contain",
                            height: 100,
                        }} />

                    Galar
                </TouchableOpacity>
            </div>

            <div className="pokedexKantoButton">
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Other', {
                            pokemonData: otherPokemonList,
                            renderItem: renderItem,
                            FlatListItemSeparator: FlatListSeparator,
                        });
                    }}>

                    <Image source={OtherImage}
                        style={{
                            resizeMode: "contain",
                            height: 100,
                        }} />

                    Other
                </TouchableOpacity>
            </div>
        </View>
    );
};

export default PokedexScreen;
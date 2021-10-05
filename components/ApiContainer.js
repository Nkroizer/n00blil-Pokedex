import React, { Component } from 'react';
import { View, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import ApiView from './ApiView';
import Pokemon from './Pokemon';

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

var pokemonList = [];

const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        return await AsyncStorage.setItem('@pokemon_List', jsonValue);
    } catch (e) {
        // saving error
    }
};

const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@pokemon_List');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
};

class ApiContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            axiosData: null
        };
    };

    goForAxios = () => {
        this.setState({
            loading: true,
        })

        axios.get(apiUrl)
            .then(response => {
                var newArr = pokemonList;
                if (response.data.results) {
                    response.data.results.forEach(element => {
                        axios.get(element.url)
                            .then(pokeresponse => {
                                if (!pokeresponse.data.name.includes("mega")) {
                                    newArr.push(pokeresponse.data);
                                }
                            });
                    });
                    pokemonList = newArr;
                }
                //&& pokemonList.length <= 100
                if (response.data.next) {
                    apiUrl = response.data.next;
                    this.goForAxios();
                } else {
                    pokemonList.sort(function (a, b) {
                        return a.id - b.id;
                    });
                    console.log(pokemonList)
                    storeData(pokemonList).then((data) => {
                        this.setState({
                            loading: false,
                            axiosData: pokemonList
                        });
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    getPokemonData = () => {
        // getData().then((data) => {
        //     if (!data) {
        //         this.goForAxios();
        //     } else {
        //         console.log(data);
        //     }
        // })
        const list = require('../savedData/pokemon.json');
        console.log(list)
        this.setState({
            loading: false,
            axiosData: list
        })
    };

    FlatListSeparator = () => {
        return (
            <View style={{
                height: .5,
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
            }}
            />
        );
    };

    renderItem = (data) => {
        // console.log(data)
        return (
            <TouchableOpacity>
                <Pokemon pokeData={data} ></Pokemon>
            </TouchableOpacity>
        )
    };

    render() {
        const { loading, axiosData } = this.state
        return (
            <ApiView
                goForAxios={this.getPokemonData}
                loading={loading}
                axiosData={axiosData}
                FlatListSeparator={this.FlatListSeparator}
                renderItem={this.renderItem}
            />
        );
    };
};

export default ApiContainer;
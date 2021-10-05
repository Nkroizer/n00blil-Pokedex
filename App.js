import React from 'react'
import { StyleSheet, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokedexScreen from './components/PokedexMain'
import RegionPokedex from './components/RegionPokedex'
import PokemonDetails from './components/PokemonDetails'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Pokedex"
        onPress={() => navigation.navigate('Pokedex')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pokedex" component={PokedexScreen} />
        <Stack.Screen name="Kanto" component={RegionPokedex} />
        <Stack.Screen name="Jhoto" component={RegionPokedex} />
        <Stack.Screen name="Hoenn" component={RegionPokedex} />
        <Stack.Screen name="Sinnoh" component={RegionPokedex} />
        <Stack.Screen name="Unova" component={RegionPokedex} />
        <Stack.Screen name="Kalos" component={RegionPokedex} />
        <Stack.Screen name="Alola" component={RegionPokedex} />
        <Stack.Screen name="Galar" component={RegionPokedex} />
        <Stack.Screen name="Other" component={RegionPokedex} />
        <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
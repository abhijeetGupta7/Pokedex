import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonList() {

        // Grouping all state variables into one state object
        const [pokemonListStates, setPokemonListStates] = useState({
            url: "https://pokeapi.co/api/v2/pokemon",
            prevURL: null,
            nextURL: null,
            pokemonList: [],
            isLoading: true
        });
    
        async function fetchPokemons() {
            try {
                setPokemonListStates(prevState => ({ ...prevState, isLoading: true }));
    
                const response = await axios.get(pokemonListStates.url);
                const pokemonResultPromises = response.data.results.map(pokemon => axios.get(pokemon.url));
                const pokemonData = await Promise.all(pokemonResultPromises);
    
                const formattedPokemonData = pokemonData.map(pokemon => ({
                    id: pokemon.data.id,
                    name: pokemon.data.name,
                    image: pokemon.data.sprites.other?.dream_world.front_default || pokemon.data.sprites.front_shiny
                }));
    
                setPokemonListStates(prevState => ({
                    ...prevState,
                    prevURL: response.data.previous,
                    nextURL: response.data.next,
                    pokemonList: formattedPokemonData,
                    isLoading: false
                }));
            } catch (error) {
                console.error("Error fetching Pokémon data:", error);
                setPokemonListStates(prevState => ({ ...prevState, isLoading: false }));
            }
        }
    
        useEffect(() => {
            fetchPokemons();
        }, [pokemonListStates.url]); 

        return [pokemonListStates, setPokemonListStates];
}

export default usePokemonList;
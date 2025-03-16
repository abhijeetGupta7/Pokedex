import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonDetails(id, name) {
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

    const [isLoading, setIsLoading] = useState(true);
    const [pokemonDetails, setPokemonDetails] = useState({});
    const [sameTypePokemon, setSameTypePokemon] = useState([]);

    async function downloadPokemon() {
        try {
            setIsLoading(true);  
            let response;
            if (id) response = await axios.get(`${BASE_URL}${id}`);
            else response = await axios.get(`${BASE_URL}${name}`);

            setPokemonDetails({
                name: response.data.name,
                image: response.data.sprites.other?.dream_world.front_default || response.data.sprites.front_shiny,
                height: response.data.height,
                weight: response.data.weight,
                types: response.data.types.map((type) => type.type.name),
            });
        } catch (error) {
            console.error("Error fetching Pokemon:", error);
        } finally {
            setIsLoading(false); 
        }
    }

    useEffect(() => {
        if (id || name) downloadPokemon();
    }, [id, name]); 

    async function downloadSameTypePokemon(pokemon_type) {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/type/${pokemon_type}/`);
            const sameTypes = response.data.pokemon.map((pokemon) => pokemon.pokemon);
            setSameTypePokemon(sameTypes);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (!isLoading && pokemonDetails.types?.length > 0) {
            downloadSameTypePokemon(pokemonDetails.types[0]);
        }
    }, [pokemonDetails.types]);  

    return [isLoading, pokemonDetails, sameTypePokemon];
}

export default usePokemonDetails;

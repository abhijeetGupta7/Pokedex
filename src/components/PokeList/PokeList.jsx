import "./PokeList.css";
import Pokemon from "../Pokemon/Pokemon";

function PokeList({ pokemonList, isLoading }) {
    return (
        <div className="pokemon-list-wrapper">
            
            <div className="pokemon-wrapper">
                {isLoading ? "Pokémons Loading..." :
                    pokemonList.map(pokemon => (
                        <Pokemon key={pokemon.id} id={pokemon.id} name={pokemon.name} image={pokemon.image} />
                    ))
                }
            </div>
        
        </div>
    );
}

export default PokeList;

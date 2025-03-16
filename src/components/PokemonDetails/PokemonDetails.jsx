import { Link, useParams } from "react-router-dom";
import "./PokemonDetails.css";
import usePokemonDetails from "../../customHooks/usePokemonDetails";

function PokemonDetails({ pokemonName, searchTerm, setSearchTerm }) {
    const { id } = useParams();
    console.log(`pokemonName ${pokemonName}`);

    const [isLoading, pokemonDetails, sameTypePokemon] = usePokemonDetails(id,pokemonName);
    
    return (
        <>
            {isLoading ? "Loading" : (
                <div>
                    <div className="pokemon-details-wrapper">
                        <img className="pokemon-details-image" src={pokemonDetails?.image} alt={pokemonDetails?.name} />
                        <div className="pokemon-details-content">
                            <div className="pokemon-details-name"> {pokemonDetails?.name} </div>
                            <div className="pokemon-details-height"> Height: {pokemonDetails?.height} </div>
                            <div className="pokemon-details-weight"> Weight: {pokemonDetails?.weight} </div>
                            <div className="pokemon-details-types">
                                {pokemonDetails?.types?.map((type) => (
                                    <span key={type} className="pokemon-type">{type} </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="similar-type-pokemons-wrapper">
                        <h2> Similar Type Pokemons </h2>
                        { 
                            sameTypePokemon?.map((pokemon, index) => {
                                const id=pokemon.url.split("/").filter(Boolean).pop();
                                return (
                                    <span key={index}>
                                        <Link key={index} to={`/pokemon/${id}`}>
                                            {pokemon.name}
                                        </Link>
                                    </span>
                                );
                            })
                        }
                    </div>
                </div>
            )}
        </>
    );
}

export default PokemonDetails;

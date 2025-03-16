import PokeList from "../PokeList/PokeList";
import "./Pokedex.css";
import usePokemonList from "../../customHooks/usePokemonList";
import PokemonDetails from "../PokemonDetails/PokemonDetails";

function Pokedex({searchTerm, setSearchTerm}) {

    const [pokemonListStates, setPokemonListStates]=usePokemonList();

    return (       
        
        searchTerm ? <PokemonDetails pokemonName={searchTerm} />  : (

        <div className="pokedex-wrapper">
            
            <PokeList pokemonList={pokemonListStates.pokemonList} isLoading={pokemonListStates.isLoading} />

            <div className="page-navigation">
                <button 
                    onClick={() => pokemonListStates.prevURL && 
                        setPokemonListStates(prevState => ({ ...prevState, url: prevState.prevURL }))} 
                        disabled={!pokemonListStates.prevURL}>
                    Prev
                </button>

                <button 
                    onClick={() => pokemonListStates.nextURL && 
                        setPokemonListStates(prevState => ({ ...prevState, url: prevState.nextURL }))} 
                    disabled={!pokemonListStates.nextURL}>
                    Next
                </button>
            </div>
        </div>
        )
    );
}

export default Pokedex;

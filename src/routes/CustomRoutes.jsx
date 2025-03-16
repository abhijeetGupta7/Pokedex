import { Routes, Route } from "react-router-dom";
import Pokedex from "../components/Pokedex/Pokedex";
import PokemonDetails from "../components/PokemonDetails/PokemonDetails";

function CustomRoutes({searchTerm, setSearchTerm}) {
    return (
        <> 
            <Routes>
                <Route path="/" element={<Pokedex searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
                <Route path="/pokemon/:id" element={<PokemonDetails searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} /> 
            </Routes>
        </>
    )
}

export default CustomRoutes;
import { useState, useCallback } from "react";
import useDebounce from "../../customHooks/useDebounce";
import "./Search.css";

// GOOD CONCEPT USED HERE

function Search({ searchTerm, setSearchTerm, inputValue, setInputValue }) {

    // Memoize the debounced function to prevent unnecessary re-creation
    const debouncedCallback = useCallback(
        useDebounce((value) => {
            console.log(value);
            setSearchTerm(value);
        }, 5000), 
    [setSearchTerm]);  

    return (
        <>
            <input 
                className="poke-search" 
                type="text" 
                placeholder="Pokemon name..." 
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);              // UI updates immediately
                    debouncedCallback(e.target.value.trim());  // API call after debounce
                }}
            />
        </>
    );
}

export default Search;

import React, { useEffect, useState } from "react";

const url = "https://pokeapi.co/api/v2/pokemon?limit=1000";

const fetchPokemons = async () => {
  // fetch(url)
  // .then((response) => {
  //   console.log(response);
  //   return response.json();
  // })
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // LOGICA
    setLoading(true);
    fetchPokemons().then((pokemonResult) => {
      setPokemons(pokemonResult);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {/* Si loading está en verdadero renderiza lo que 
        está después del &&
      */}
      {loading && <span>...loading</span>}
      {pokemons.map((pokemon) => (
        <div key={pokemon.name}>
          <h3>Nombre: {pokemon.name}</h3>
          <span>{pokemon.url}</span>
        </div>
      ))}
    </div>
  );
};

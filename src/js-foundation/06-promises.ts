import { httpClientPlugin as http } from '../plugins/http-client.plugin'


export const getPokemonById = async (id: number | string): Promise<string> => {

  try {
    const url = `https://pokeapi.co/api/${id}`;
    const pokemon = await http.get(url);
    return pokemon.name;


  }
  catch (err) {
    throw `Pokemon not found with id ${id}`;
  }

  //const resp = await fetch(url);
  // const pokemon = await resp.json();

  //throw new Error("Pokemon doesn't exist");
  //return fetch(url)
  // .then((resp) => resp.json())
  // .then(() => { 
  //   throw new Error("Plaese try it again");
  // })
  // .then((pokemon) => pokemon.name);
};


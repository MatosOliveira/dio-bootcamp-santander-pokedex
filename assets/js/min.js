
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToHtml(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
            <div class="details">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                <img src="/imagens/bulbasaur.jpg" alt="${pokemon.name}" />
            </div></>
        </li>`
    
}

const pokemonList = document.getElementById('pokemonList')

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {
       
        for (let index = 0; index < pokemons.length; index++) {
            const pokemon = pokemons[index];
            console.log(convertPokemonToHtml(pokemon))
            pokemonList.innerHTML += convertPokemonToHtml(pokemon)

        }
    })
    .catch((error) => console.log(error))

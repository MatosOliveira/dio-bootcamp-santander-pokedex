
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 10;
let offset = 0;
const maxRecords = 151;

function convertPokemonToHtml(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="details">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}" />
            </div></>
        </li>`
    
}

function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map(convertPokemonToHtml).join('')
    })
}

loadPokemonItems(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdeRecordsNextPage = offset + limit;

    if(qtdeRecordsNextPage >= maxRecords) {
        const newLimit = qtdeRecordsNextPage - maxRecords
        loadPokemonItems(offset, limit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)

    } else {
        loadPokemonItems(offset, limit)
    }
    
})


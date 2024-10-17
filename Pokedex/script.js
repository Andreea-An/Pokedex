

function rechercherPokemon() {
    var input = document.getElementById("searchInput").value.toLowerCase();

    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${input}`)
        .then(response => response.json())
        .then(data => {
            // Affiche les informations sur le Pokémon
            let typesHTML = "";
            data.apiTypes.forEach(type => {
                typesHTML += `<p>Type: ${type.name}</p>`;
                typesHTML += `<img src="${type.image}" alt="${type.name}">`;
            });

            document.getElementById("listPokemon").innerHTML = `
                <span id="pokedex_Id">#${data.pokedexId}</span>
                <div id="carte">
                <h1>${data.name}</h1>
                
                <img src="${data.image}" alt="${data.name}">
                <div id="type">
                    ${typesHTML}
                </div>
                <h3>Evolution: ${data.apiEvolutions[0].name}</h3>
                </div>
            `;
        })
        .catch(error=> {
            console.log('Erreur', error);
        });
    
}

fetch('https://pokebuildapi.fr/api/v1/pokemon?limit=30')
.then(response => response.json())
.then(data => {

const pokemonList = data.slice(0, 100);


const ul = document.getElementById('pokeInfoZ');

pokemonList.forEach(pokemon => {
    const li = document.createElement('li');
    

    const img = document.createElement('img');
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`; // URL de l'image du Pokémon
    
    
    const p = document.createElement('p');
    p.textContent = pokemon.name;
    
    
    li.appendChild(img);
    li.appendChild(p);
    
    
    ul.appendChild(li);
});
})
.catch(error => console.error('Une erreur s\'est produite : ', error));
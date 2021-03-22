// DOM's elements
const $main = document.querySelector("main");
let $searchValue = document.querySelector("#pokemon").value;
let inputValue = $searchValue.toLowerCase();
const $submit = document.querySelector("form");

const urlEachPokemon = "https://pokeapi.co/api/v2/pokemon/";
const endpointSearch = urlEachPokemon + inputValue;
 
const urlAllPokemon = "https://pokeapi.co/api/v2/pokemon?limit=101";
let allPokemon = [];

// Search all pokemons from api

const searchAllPokemon = async () => {
    try {
        const response = await fetch(urlAllPokemon);
        
        if(response.ok){

            let responseJson = await response.json();
            
            allPokemon.push(responseJson.results);
            
            for(let i = 1; i < allPokemon[0].length; i ++){

                //console.log(allPokemon[0][i].name);
                
                let namePokemon = allPokemon[0][i].name; // add this on urlEachPokemon
                
                fetchInfoEachPokemon(namePokemon);

            }
        }

    } catch(error) {
        console.log("error :" + error);
    }

}

searchAllPokemon();

// Get all informations about each pokemon

const fetchInfoEachPokemon = async (pokemon) => {
    try{
        const data = await fetch(urlEachPokemon + pokemon);
        
        if(data.ok){

            let dataJson = await data.json();
            let name = dataJson.name;
            let picture = dataJson.sprites.front_default;
            let idPokemon = dataJson.id;
            const $card = document.createElement("div");
            $card.classList.add("card");
            $card.innerHTML = `<img src="${picture}" alt="${name}"/><h2>${name}</h2><p>Id #${idPokemon}</p>`;
            $main.appendChild($card);

        } 

    } catch(error){
        console.log("error :" + error)
    }
}

// Search with form for a specific pokemon among the results

// Add background-colors dependind types of pokemon 
// https://pokeapi.co/docs/v2#pokemon
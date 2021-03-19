
// DOM's elements
const $main = document.querySelector("main");
let $searchValue = document.querySelector("#pokemon").value;
let inputValue = $searchValue.toLowerCase();
const $submit = document.querySelector("form");

const urlSearch = "https://pokeapi.co/api/v2/";
const endpointSearch = urlSearch + inputValue;
 
const urlAllPokemon = "https://pokeapi.co/api/v2/pokemon?limit=101";
let allPokemon = [];

// Search all pokemons from api

const searchAllPokemon = async () => {
        try {
            const response = await fetch(urlAllPokemon);
            
            if(response.ok){

                let responseJson = await response.json();
                
                allPokemon.push(responseJson.results);
                //console.log(allPokemon)
                
                for(let i = 1; i < allPokemon[0].length; i ++){

                    console.log(allPokemon[0][i].name);
                    let namePokemon = allPokemon[0][i].name;
                    const $card = document.createElement("div");
                    $card.classList.add("card");
                    $card.innerHTML = `<h2>${namePokemon}</h2>`;
                    $main.appendChild($card);

                }
            }

        } catch(error) {
            console.log("error :" + error);
        }
    

}

searchAllPokemon();
// Search for a specific pokemon among the results 
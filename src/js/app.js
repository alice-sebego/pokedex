import {setBackgroundColor} from './bgcolor-card.js';

// DOM's elements
const $main = document.querySelector("main");
const $inputForm = document.querySelector("#pokemon");
const $form = document.querySelector("form");

// URL & endpoints
const urlEachPokemon = "https://pokeapi.co/api/v2/pokemon/";
const urlAllPokemon = "https://pokeapi.co/api/v2/pokemon?limit=101";

// Array where we store name or datas of each pokemon
let allPokemon = [];
let namePokemon;
let cardsName = [];

/**
 * Search all pokemons from api
 * @param {array} arr 
 */
const searchAllPokemon = async (arr) => {
    try {
        const response = await fetch(urlAllPokemon);
        
        if(response.ok){

            let responseJson = await response.json();
            
            arr.push(responseJson.results);
            
            // add datalist
            let $datalist = document.createElement("datalist");
            $datalist.setAttribute("id", "pokemon-name");
            $form.appendChild($datalist);

            arr[0].forEach( element => {

                namePokemon = element.name; 
                
                cardsName.push(namePokemon);
                
                let $optionDatalist = document.createElement("option");
                $optionDatalist.value = namePokemon;
                $datalist.appendChild($optionDatalist);
                
                fetchInfoEachPokemon(namePokemon);
            })

        }

    } catch(error) {
        console.log("error :" + error);
    }

}

// Call the function searchAllPokemon when DOM is loaded
document.addEventListener("DOMContentLoaded", searchAllPokemon(allPokemon))

/**
 * Get all informations about each pokemon
 * @param {string} pokemon 
 */
const fetchInfoEachPokemon = async (pokemon) => {
    try{
        const data = await fetch(urlEachPokemon + pokemon);
        
        if(data.ok){

            let dataJson = await data.json();

            let name = dataJson.name;
            let picture = dataJson.sprites.front_default;
            let idPokemon = dataJson.id;
            let typePokemon = dataJson.types[0].type.name;

            const $card = document.createElement("div");
            $card.classList.add("card");
            $card.innerHTML = `<img src="${picture}" alt="${name}"/><h2>${name}</h2><p>Id #${idPokemon}</p>`;
            
            setBackgroundColor(typePokemon, $card)

            $main.appendChild($card);

        } 

    } catch(error){
        console.log("error :" + error)
    }
}

// Search with form for a specific pokemon among the results

$inputForm.addEventListener("input", e =>{
    
    const element = e.target.value.toLowerCase();
    
    const $cards = cardsName.filter(pokemon =>
        pokemon.toLowerCase().includes(element)
    );

    $cards.forEach(card =>{
        $main.innerHTML = "";
        fetchInfoEachPokemon(card)
    });
          
});

 
// https://pokeapi.co/docs/v2#pokemon
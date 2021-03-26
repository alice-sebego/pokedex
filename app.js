// DOM's elements
const $main = document.querySelector("main");
const $inputForm = document.querySelector("#pokemon");
let $searchValue = document.querySelector("#pokemon").value;
let inputValue = $searchValue.toLowerCase();
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

            for(let i = 0; i < arr[0].length; i ++){

                namePokemon = arr[0][i].name; // add this on urlEachPokemon
                
                cardsName.push(namePokemon);
                
                let $optionDatalist = document.createElement("option");
                $optionDatalist.value = namePokemon;
                $datalist.appendChild($optionDatalist);
                
                fetchInfoEachPokemon(namePokemon);

            }
        }

    } catch(error) {
        console.log("error :" + error);
    }

}

// Call the fucntion searchAllPokemon when DOM is loaded
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
            switch (typePokemon){
                case "grass":
                    $card.style.backgroundColor = "#78c850";
                    break;
                case "fire":
                    $card.style.backgroundColor = "#F58271";
                    break;
                case "water":
                    $card.style.backgroundColor = "#6390F0";
                    break;
                case "bug":
                    $card.style.backgroundColor = "#B3F594";
                    break;
                case "normal":
                    $card.style.backgroundColor = "#D9D5D8";
                    break;
                case "poison":
                    $card.style.backgroundColor = "#966DA3";
                    break;
                case "electric":
                    $card.style.backgroundColor = "#F7D02C";
                    break;
                case "ground":
                    $card.style.backgroundColor = "#E2BF65";
                    break;
                case "fairy":
                    $card.style.backgroundColor = "#D685AD";
                    break;
                case "figthing":
                    $card.style.backgroundColor = "#C25956";
                    break;
                case "psychic":
                    $card.style.backgroundColor = "#F95587";
                    break;
                case "rock":
                    $card.style.backgroundColor = "#B6A136";
                    break;
                case "ghost":
                    $card.style.backgroundColor = "#735797";
                    break;
                case "dragon":
                    $card.style.backgroundColor = "#6F35FC";
                    break;
                case "ice":
                    $card.style.backgroundColor = "#96D9D6";
                default:
                    $card.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
                    break;
            }

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
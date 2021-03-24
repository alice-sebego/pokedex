// DOM's elements
const $main = document.querySelector("main");
const $inputForm = document.querySelector("#pokemon");
let $searchValue = document.querySelector("#pokemon").value;
let inputValue = $searchValue.toLowerCase();
const $form = document.querySelector("form");

const urlEachPokemon = "https://pokeapi.co/api/v2/pokemon/";
//const endpointSearch = urlEachPokemon + inputValue;
 
const urlAllPokemon = "https://pokeapi.co/api/v2/pokemon?limit=101";
let allPokemon = [];

// Search all pokemons from api

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

                let namePokemon = arr[0][i].name; // add this on urlEachPokemon
                
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

searchAllPokemon(allPokemon);

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

//console.log(allPokemon);

const search = () =>{
    
    let $cards = document.querySelectorAll(".card");
    let $cardsName = document.querySelectorAll(".card > h2");
    let h2Value = [];
    console.log(inputValue);
    for(let i = 0; i < $cards.length; i++){
        
        
        h2Value.push($cardsName[i].textContent);
        console.log(h2Value)
    
        if(h2Value.includes(inputValue)){
        $cards[i].style.display = "unset";
        } else{
        $cards[i].style.display = "none";
        }
    }
}
$inputForm.addEventListener("input", search);

// Add background-colors dependind types of pokemon 
// https://pokeapi.co/docs/v2#pokemon
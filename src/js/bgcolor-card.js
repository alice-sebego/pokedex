/**
 * Set background-color for each card depending his type
 * @param {string} type 
 * @param {HTMLDivElement} card 
 */
const setBackgroundColor = (type, card) => {
    switch (type){
        case "grass":
            card.style.backgroundColor = "#78c850";
            break;
        case "fire":
            card.style.backgroundColor = "#F58271";
            break;
        case "water":
            card.style.backgroundColor = "#6390F0";
            break;
        case "bug":
            card.style.backgroundColor = "#B3F594";
            break;
        case "normal":
            card.style.backgroundColor = "#D9D5D8";
            break;
        case "poison":
            card.style.backgroundColor = "#966DA3";
            break;
        case "electric":
            card.style.backgroundColor = "#F7D02C";
            break;
        case "ground":
            card.style.backgroundColor = "#E2BF65";
            break;
        case "fairy":
            card.style.backgroundColor = "#D685AD";
            break;
        case "figthing":
            card.style.backgroundColor = "#C25956";
            break;
        case "psychic":
            card.style.backgroundColor = "#F95587";
            break;
        case "rock":
            card.style.backgroundColor = "#B6A136";
            break;
        case "ghost":
            card.style.backgroundColor = "#735797";
            break;
        case "dragon":
            card.style.backgroundColor = "#6F35FC";
            break;
        case "ice":
            card.style.backgroundColor = "#96D9D6";
        default:
            card.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
            break;
    }
}

export {setBackgroundColor};
/**
 * Set a message when we have a 404 error
 * @param {HTMLElement} elementHTML 
 */
const setMsgError404 = (elementHTML) => {
    const msgError = document.createElement("div");
    msgError.setAttribute("id", "error");
    msgError.innerHTML = `<img src="https://media.giphy.com/media/JPKmhwbO5zX1u/giphy.gif" alt="Données non fournies désolé" /><p>Ooh nooo ! Nous n'avons pas pu recevoir les données de notre fournisseur de données<br>Un coup de la team Rocket, sans doute :/</p>`;
    elementHTML.appendChild(msgError);
}

const setMsgError = (elementHTML, errorDescription) => {
    const msgError = document.createElement("div");
    msgError.setAttribute("id", "error");
    msgError.innerHTML = `<img src="https://media.giphy.com/media/l0HluqguCBcvwCvBu/giphy.gif" alt="Données non fournies désolé" /><p>Ooh nooo ! Erreur : ${errorDescription}<br>Nous n'avons pas pu recevoir les données de notre fournisseur de données<br>Un coup de la team Rocket, sans doute :/</p>`;
    elementHTML.appendChild(msgError);
}

export {setMsgError404, setMsgError};